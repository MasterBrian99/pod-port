package main

// import (
// 	"sync"

// 	"github.com/docker/docker/client"
// )

// type Controller struct {
// 	cli *client.Client
// }

// var instance *Controller
// var mu sync.Mutex

// func NewController() (c *Controller) {
// 	if instance == nil {
// 		mu.Lock()
// 		defer mu.Unlock()
// 		if instance == nil {
// 			c = new(Controller)
// 			c.cli, _ = client.NewClientWithOpts(client.FromEnv)
// 			instance = &Controller{}

// 		}
// 	}
// 	return instance
// 	// c = new(Controller)

// 	// c.cli, err = client.NewClientWithOpts(client.FromEnv)

// 	// if err != nil {
// 	// 	return nil, err
// 	// }
// 	// return c, nil
// }

// // package singleton
// // import "sync"
// // type singleton struct{}
// // var instance *singleton
// // var mu sync.Mutex
// // func GetSingleton() *singleton {
// //     if instance == nil {
// //         mu.Lock()
// //         defer mu.Unlock()
// //         if instance == nil {
// //             instance = &singleton{}
// //         }
// //     }
// //     return instance
// // }
