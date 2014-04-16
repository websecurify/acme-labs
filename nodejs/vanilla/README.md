# Ties And Socks

This simple service calculates a product price based on several input fields.

## How To Start

The service runs on port 8080 by default.

	node ties-and-socks.js

## Testing Links

The following links can be used to play with the service.

* [Resend](https://suite.websecurify.com/apps/resend/#request=POST%20http%3A%2F%2Flocalhost%3A8080%2F%20HTTP%2F1.1%0AContent-Type%3A%20application%2Fjson%0A%0A%7B%22code%22%3A%20%22USD%22%2C%20%22quantity%22%3A1%2C%20%22item%22%3A%20%22tie%22%7D%0A)
* [Jsonfuzz](https://suite.websecurify.com/apps/jsonfuzz/#request=POST%20http%3A%2F%2Flocalhost%3A8080%2F%20HTTP%2F1.1%0AContent-Type%3A%20application%2Fjson%0A%0A%7B%22code%22%3A%20%22USD%22%2C%20%22quantity%22%3A1%2C%20%22item%22%3A%20%22tie%22%7D%0A)
