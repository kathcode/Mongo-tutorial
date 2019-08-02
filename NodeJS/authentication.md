# AUTHENTICATION - NODEJS

There are many concepts that we need to know about the authentication.

**There are some of them:**

## Content

1. WJT

   1.1 - Definition

   1.2 - Parts

   1.3 - Examples

2. Middleware Authentication

   2.1 - Example

## JWT (JSON Web Token)

---

### Definition:

> Is a means of representing claims to be transferred between two parties. The claims in a JWT are encoded as a JSON object that is digitally signed using JSON Web Signature (JWS) and/or encrypted using JSON Web Encryption (JWE).

In other words it is another way to use a JSON object encoded as an access tokens for authentication with the server.

The JSON Web Token standard can be used across multiple languages and is quickly and easily interchangeable.

### Parts of JWT Token:

![](https://miro.medium.com/max/1400/1*0SEbHdFcVpaejejGA-1DDw.png)

**Header:** The header have two properties, **alg** and **typ**.

```json
{
  "alg": "HS256", // Signing algorithms to use (HMAC SHA256 / RSA SHA256 )
  "typ": "JWT" // Type of token
}
```

**Payload:** The payload will carry the bulk of our JWT, also called the JWT Claims. This is where we will put the information that we want to transmit and other information about our token.

**Signature:** This signature is made up of a hash of the header, the payload and the secret. It is calculated by base64url.

### Example of JWT:

`aaaaaaaaaa.bbbbbbbbbbb.cccccccccccc`

---

### Example JWT

```javascript
const jwt = require('jsonwebtoken');

const authentication = async () => {
  const payload = { id: '123abc' };
  const signature = '1234567asdfghj';

  // Create token
  const token = jwt.sing(payload, signature, { expiresIn: '2 days' });

  // Verify token
  jwt.verify(token, signature);

  console.log(token);
};

authentication();
```

## MIDDLEWARE AUTHENTICATION

```javascript
const jwt = require('jsonwebtoken');
const User = require('models/user');
const signature = '1234567asdfghj';

const auth = async (req, res, next) => {
  try {
    const token = req.header('Authentication').replace('Bearer ', '');
    const decoded = jwt.verify(token, signature);
    const user = User.findOne({ _id: decoded._id });
  } catch (e) {}
};
```

---

### Resources:

- https://jwt.io/introduction
- https://codeburst.io jwt-to-authenticate-servers-apis-c6e179aa8c4e
- https://scotch.io/tutorials/the-anatomy-of-a-json-web-token
