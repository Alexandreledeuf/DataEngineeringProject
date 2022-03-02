import sys
from detoxify import Detoxify

def main():
    text = sys.argv[1]
    print(text)
    results = Detoxify('original').predict(text)
    print(results)

if __name__ == "__main__":
    main()