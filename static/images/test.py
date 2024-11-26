from PIL import Image

# Load the uploaded image
input_image_path = 'Icon.png'
original_image = Image.open(input_image_path)

# Define output sizes and paths
sizes = [(16, 16), (32, 32), (180, 180)]  # 16x16, 32x32, and 180x180 for apple-touch-icon
output_paths = {
    "16x16": 'favicon-16x16.png',
    "32x32": 'favicon-32x32.png',
    "apple_touch_icon": 'apple-touch-icon.png'
}

# Resize images and save
resized_images = {}
for size, path in zip(sizes, output_paths.values()):
    resized_image = original_image.resize(size, Image.LANCZOS)  # Use Image.LANCZOS instead of Image.ANTIALIAS
    resized_image.save(path)
    resized_images[size] = path

output_paths

