# Cryptography API

The cryptography API is a simple, easy-to-use tool to use for encrypting and decrypting simple ciphers. It includes well-known cipher including the affine cipher, the vigenère cipher, and caesar's cipher, to name a few.

# Making API Calls

Making calls to the cryptography API was made to be simple. The general format for making a request is as follows: `/<cipher name>/<encrypt or decrypt>/<message to encrypt or decrypt>?<keys>`. It is important to note that all text found in the API should be written in **lowercase** with no special characters, except for some ciphers requiring numerical inputs.

## API Enpoint

when making requests to the API make sure the url is set to

```
https://cryptography--api.herokuapp.com/
```

followed by the request information

## Example Requests

This request will encrypt the message "secretmessage" with the affine cipher using the keys "a" with a value of 3 and "b" with a value of 5.

```
/affine/encrypt/secretmessage?a=3&b=5
```

This request will decrypt the message "topsecret" given the key "a" with the string "keytoencrypt".

```
/vigenere/decrypt/topsecret?a=keytoencrypt
```

## Cipher Name

This is simply just the name of one of the ciphers available.

## Encrypt or Decrypt

Simply specifiy if the given message in the request should be encrypted or decrypted.

## Message to Encrypt

This will be the message to be encrypted or decrypted by the cipher. As mentioned before, the message included in the request must be written in lowercase and contain no special characters other than letters.

## Keys

Most of the ciphers that are available will require the use of keys in order to specify how to encrypt messages. More specifics as to what keys to provide for certain ciphers can be found bellow in the available ciphers section.

# Available Ciphers

## Affine

The affine cipher will require 2 keys when encrypting and decrypting messages. The first key, a, can be any whole number that is not zero. The second key, b, can be any whole number. For information on how the cipher works, check out [this article](https://en.wikipedia.org/wiki/Affine_cipher#:~:text=The%20affine%20cipher%20is%20a,converted%20back%20to%20a%20letter.&text=As%20such,%20it%20has%20the%20weaknesses%20of%20all%20substitution%20ciphers.).

## Atbash

The atbash cipher in fact takes no keys to encrypt or decrypt. So, there will be no need to use the keys query when using it. For more information on how the cipher works, check out [this article](https://en.wikipedia.org/wiki/Atbash).

## Caesar

The caesar key will require only one key, a, which will accept any whole number as an input. For information on how the cipher works, check out [this article](https://en.wikipedia.org/wiki/Caesar_cipher).

## Vigenere

The Vigenere cipher requires only one key, a, which can be a string of any length. Additionally, the string should be exclusively made of lowercase letters with no special characters. For more information on how the cipher works, check out [this article](https://en.wikipedia.org/wiki/Vigen%C3%A8re_cipher).
