# API Docs

## Usage from other programming languages

### Go

```go
package main

import (
	"encoding/json"
	"fmt"
	"io/ioutil"
	"log"
	"net/http"
)

type JokeResponse struct {
	Id        int    `json:"id"`
	Type      string `json:"type"`
	Setup     string `json:"setup"`
	Punchline string `json:"punchline"`
}

func main() {

	response, errorFetching := http.Get("https://joke.deno.dev")

	if errorFetching != nil {
		log.Fatalf("Error while fetching: %v", errorFetching)
	}

	responseData, readError := ioutil.ReadAll(response.Body)

	if readError != nil {
		log.Fatalf("Error while reading response: %v", readError)
	}

	var parsedResponse JokeResponse

	json.Unmarshal(responseData, &parsedResponse)

	fmt.Println(parsedResponse.Setup)
	fmt.Println(parsedResponse.Punchline)
}
```

### Python

Without using external Libraries:

```python
import urllib.request


def fetch_jokes():
    with urllib.request.urlopen("https://joke.deno.dev") as response:
        return response.read()
```

Using [request](https://docs.python-requests.org):

```python
import requests


def fetch_jokes():
    requests.get("https://joke.deno.dev").json()
```

### Others

You can add examples of your favorite programming language.

## Projects Using this API

No one at the moment, if you are using this API in your project, you can make a
pull request and add it here.
