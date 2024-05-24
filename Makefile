.PHONY: build publish build-with-publish fmt generate-models build

.DEFAULT: fmt generate-models build-with-publish

build:
	npm run build
publish:
	npm publish
build-with-publish: build publish
fmt:
	@npx prettier src/ --write
generate-models:
	@npx swagger-typescript-api --path ${SWAGGER_PATH} --output ./src --name models.ts --no-client
