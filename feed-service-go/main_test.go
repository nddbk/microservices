// main.test
package main

import (
	"encoding/json"
	"io/ioutil"
	"net/http"
	"testing"
	"os"
	"github.com/stretchr/testify/assert"
)


func TestIndexRoute(t *testing.T) {

	jsonFile, _ := os.Open("service.json")
	defer jsonFile.Close()
	byteValue, _ := ioutil.ReadAll(jsonFile)
	var service Service
	json.Unmarshal([]byte(byteValue), &service)

	app, _ := CreateServer()

	req, _ := http.NewRequest("GET", "/", nil)

	res, _ := app.Test(req, -1)

	assert.Equalf(t, 200, res.StatusCode, "GET / must return 200 HTTP code")

	body, _ := ioutil.ReadAll(res.Body)

	var resbody map[string]interface{}
	json.Unmarshal([]byte(body), &resbody)

	assert.Equalf(t, service.Name, resbody["service"], "GET / must return correct service name")
	assert.Equalf(t, service.Version, resbody["version"], "GET / must return correct service version")
}	