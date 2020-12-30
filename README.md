# typescript-serverless-tsoa
- [typescript](https://www.typescriptlang.org/)
- [serverless framework](https://www.serverless.com/framework/docs/getting-started/) for AWS
- [tsoa](https://tsoa-community.github.io/docs/)

## Install dependencies

```
$ yarn
```

## Development

### Environments

```
export ENV_SLS_STAGE=local
export ENV_REVISION='your-git-revision'
```

```
$ yarn dev
```

- Open [http://localhost:3000/local/version](http://localhost:3000/local/version) with your browser to see the result.
- Swagger docs is here [http://localhost:3000/local/docs/](http://localhost:3000/local/docs/) (Don't forget trailing slash `/`)
