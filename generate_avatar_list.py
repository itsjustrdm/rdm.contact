import json
import glob
import os

def generate_avatar_list():
    # Get all PNG files in the avatars directory
    avatars = glob.glob('images/avatars/*.png')
    # Extract just the filenames
    avatar_files = [os.path.basename(f) for f in avatars]
    
    # Write to JSON file
    with open('avatars.json', 'w') as f:
        json.dump(avatar_files, f)

if __name__ == "__main__":
    generate_avatar_list()