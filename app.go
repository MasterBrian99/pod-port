package main

import (
	"context"
	"fmt"

	"github.com/docker/docker/api/types"
	"github.com/docker/docker/client"
)

// App struct
type App struct {
	ctx context.Context
}

// NewApp creates a new App application struct
func NewApp() *App {
	return &App{}
}

// startup is called when the app starts. The context is saved
// so we can call the runtime methods
func (a *App) startup(ctx context.Context) {
	a.ctx = ctx

}

// Greet returns a greeting for the given name
func (a *App) Greet(name string) string {
	return fmt.Sprintf("Hello %s, It's show time!", name)
}

// EnsureImage
func NewImageTest() string {

	containers, err := dockerClient.cli.ContainerList(context.Background(), types.ContainerListOptions{})
	if err != nil {
		panic(err)
	}

	for _, container := range containers {
		fmt.Printf("%s %s\n", container.ID[:10], container.Image)
	}
	return "he"
}

func (a *App) NewTestAA(name string) string {
	NewImageTest()
	getData()
	return "he"
}

func (a *App) NiceOne() string {
	dockerClient = new(Controller)
	dockerClient.cli, _ = client.NewClientWithOpts(client.FromEnv)
	return ""
}
