# Documentation/Examples

Base Url: http://64.227.169.229:5000

### Endpoint: /user/signup (POST)

```
body: {
    "firstname": "Test",
    "lastname": "1",
    "username": "test1",
    "email": "test1@labxr.com",
    "password": "test1234",
    "grade": "12"
}

Responses:
Success: {
    "data": {
        "data": {
            "id": 4,
            "firstname": "Test",
            "lastname": "2",
            "username": "test2",
            "email": "test2@labxr.com",
            "password": "$2b$10$.GyzTaaI2kci7aNDvLBdoOdxk7xxnbd/wcLuEQQfTsIstMSP0pk1G",
            "grade": "12",
            "updatedAt": "2022-05-26T17:55:06.556Z",
            "createdAt": "2022-05-26T17:55:06.442Z",
            "token": "eyJhbGciOiJIUzI1NiJ9.NA.cIVWdnS_rpFFYA_VBi_nUZFBBnvf9LU3LbxwTmYHyd0"
        },
        "message": "User created successfully!"
    },
    "error": null
}

Error: {
    "data": null,
    "error": "email must be unique"
}
```

### Endpoint: /user/login (POST)

```
body: {
    "email": "test1@labxr.com",
    "password": "test1234"
}

Responses:
Success: {
    "data": {
        "data": {
            "id": 1,
            "firstname": "Test",
            "lastname": "1",
            "username": "test1",
            "password": "$2b$10$TX.3LUc7XjeSMmL1J6Svjexd3v6G2oEgmbyyg4tbCvLxbnAuOOY12",
            "email": "test1@labxr.com",
            "grade": "12",
            "token": "eyJhbGciOiJIUzI1NiJ9.MQ.3OEcuSb1P4OO1z-HJvnASQhqRXu4FJvREEXddNJ-Yec",
            "createdAt": "2022-05-26T17:52:01.000Z",
            "updatedAt": "2022-05-26T17:52:01.000Z"
        },
        "message": "User logged in successfully!"
    },
    "error": null
}

Error: {
    "data": null,
    "error": "Incorrect Password"
}
```

### Endpoint: /user/forgot (POST)

```
header: {
    "Authorization": "Bearer eyJhbGciOiJIUzI1NiJ9.MQ.3OEcuSb1P4OO1z-HJvnASQhqRXu4FJvREEXddNJ-Yec"
}

body: {
    "email": "test1@labxr.com"
}

Responses:
Success: {
    "data": {
        "message": "You can reset your password"
    },
    "error": null
}

Error: {
    "data": null,
    "error": "Invalid token!"
}
```

### Endpoint: /user/reset (POST)

```
header: {
    "Authorization": "Bearer eyJhbGciOiJIUzI1NiJ9.MQ.3OEcuSb1P4OO1z-HJvnASQhqRXu4FJvREEXddNJ-Yec"
}

body: {
    "email": "test1@labxr.com",
    "password": "test123"
}

Responses:
Success: {
    "data": {
        "message": "Password reset successfully!"
    },
    "error": null
}

Error: {
    "data": null,
    "error": "No user found with this email"
}
```
