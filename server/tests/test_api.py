import requests

BASE_URL = "http://localhost:4111"

def test_create_news():
    response = requests.post(f"{BASE_URL}/", json={
        "title": "Test News",
        "description": "This is a test news description.",
        "url": "http://testnews.com"
    })
    assert response.status_code == 201
    assert 'title' in response.json()

def test_get_all_news():
    response = requests.get(f"{BASE_URL}/news")
    assert response.status_code == 200
    assert isinstance(response.json(), list)

def test_delete_all_news():
    response = requests.delete(f"{BASE_URL}/news")
    assert response.status_code == 200
