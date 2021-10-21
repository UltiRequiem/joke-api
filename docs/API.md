# API Docs

## Python

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

## Projects Using this API
