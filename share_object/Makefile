all:
	@gcc -c -Wall -Werror -fpic function.cpp -o function.o
	@gcc -shared function.o -o libmy.so


clean:
	@rm *.so *.o
