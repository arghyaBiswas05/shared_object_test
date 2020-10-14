#include <stdio.h>
#include <stdlib.h>
#include <dlfcn.h>
int main() {
    void *handle;
    int (*add)(int,int);
    char *error;
    
    int x;

    handle = dlopen ("../share_object/libmy.so", RTLD_LAZY);
    /*
    if (!handle) {
        fprintf (stderr, "%s\n", dlerror());
        exit(1);
    }
    dlerror(); //clear the error buffer
    */
    add = (int (*)(int,int))dlsym(handle, "addition");
    
    /*
    if ((error = dlerror()) != NULL)  {
        fprintf (stderr, "%s\n", error);
        exit(1);
    }
    */
    
    x = (*add)(5,7);
    printf("%d\n",x);
    dlclose(handle);
    return 0;
}
