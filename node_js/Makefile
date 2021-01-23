all:
	@echo "make configure: To install and configure the dependency file"
	@echo "make cpp-build: To make the shared object"
	@echo "make run: To run the application"
	@echo "make clean: To clean the entire workspace"

configure:
	@npm i ffi
	@npm i ffi-napi
	@npm i electron

cpp-build:
	@cd ../share_object/ && make

run:
	@npm start

clean:
	@rm -rf package-lock.json node_modules build
	@cd ../share_object/ && make clean
