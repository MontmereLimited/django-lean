# -*- coding: utf-8 -*-
import os, types, unittest
# python3 forward compatibility
if hasattr(types, 'ClassType'):
    ClassType = types.ClassType
    TypeType = types.TypeType
else:
    ClassType = type
    TypeType = type

# Import all Python test cases in this tests directory
for filename in os.listdir(os.path.dirname(__file__)):
    if (filename[-3:] == ".py" and
        filename != "__init__.py" and
        filename[0] != '.'):
        module = __import__('.'.join((__name__, filename[:-3])), (), (), ["*"])
        for name in dir(module):
            function = getattr(module, name)
            if (isinstance(function, TypeType) and
                issubclass(function, unittest.TestCase)):
                globals()[name] = function
