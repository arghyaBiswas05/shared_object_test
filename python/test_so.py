from ctypes import *
libc = cdll.LoadLibrary("../share_object/libmy.so")
print(libc.addition(4,9))
