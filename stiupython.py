import sys

def copy_file(src_path, dest_path):
    try:
        with open(src_path, 'rb') as src, open(dest_path, 'wb') as dest:
            while True:
                buffer = src.read(1024)
                if not buffer:
                    break
                dest.write(buffer)
    except FileNotFoundError as e:
        print(f"Error: {e.strerror}. Failed to open '{e.filename}'", file=sys.stderr)
        sys.exit(1)
    except Exception as e:
        print(f"An error occurred: {e}", file=sys.stderr)
        sys.exit(1)

if __name__ == "__main__":
    if len(sys.argv) != 3:
        print("Usage: python3 script.py <source> <destination>", file=sys.stderr)
        sys.exit(1)
    
    copy_file(sys.argv[1], sys.argv[2])