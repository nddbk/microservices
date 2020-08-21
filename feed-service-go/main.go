package main

import (
	"encoding/json"
	"fmt"
	"github.com/gofiber/cors"
	"github.com/gofiber/fiber"
	"github.com/mmcdole/gofeed"
	"io/ioutil"
	"os"
	"time"
)

type Service struct {
	Name    string
	Version string
	Host    string
	Port    int
}


func parseFeed(c *fiber.Ctx) {
	t1 := time.Now()

	url := c.Query("url")
	fmt.Printf("GET /feed?url=%v\n", url)
	fp := gofeed.NewParser()
	feed, err := fp.ParseURL(url)

	t2 := time.Now()
	diff := t2.Sub(t1).Seconds()

	status := "success"
	message := fmt.Sprintf("Finish parsing feed from `%v`", url)
	if err != nil {
		status = "error"
		message = fmt.Sprintf("Error while parsing feed from `%v`", url)
	}

	fmt.Printf("Finish parsing feed from `%v` (%v)\n", url, diff)
	c.JSON(&fiber.Map{
		"status":  status,
		"error":   err,
		"message": message,
		"data":    feed,
	})
}


func CreateServer() (*fiber.App, int) {
	t := time.Now()

	app := fiber.New()
	app.Use(cors.New())

	jsonFile, _ := os.Open("service.json")
	defer jsonFile.Close()
	byteValue, _ := ioutil.ReadAll(jsonFile)
	var service Service
	json.Unmarshal([]byte(byteValue), &service)

	host := service.Host
	port := service.Port
	name := service.Name
	vers := service.Version

	app.Get("/", func(c *fiber.Ctx) {
		fmt.Println("GET /")
		c.JSON(&fiber.Map{
			"service": name,
			"version": vers,
			"startAt": t,
		})
	})
	app.Get("/feed", parseFeed)

	fmt.Printf("`%v` started at http://%v:%v\n", name, host, port)

	return app, port
}


func main() {
	app, port := CreateServer()
	app.Listen(port)
}