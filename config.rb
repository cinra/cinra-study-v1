# ************************************
# CSS Directory
# ************************************
css_dir = "files/development/assets/css/"

# ************************************
# Sass Directory
# ************************************
sass_dir = "files/development/assets/sass/"

# ************************************
# JavaScript Directory
# ************************************
js_dir = "files/development/assets/js/"

# ************************************
# Image Directory
# ************************************
images_dir = "files/development/assets/images/"

# ************************************
# SVG Directory
# ************************************
#svg_dir = "files/development/assets/images/"

# ************************************
# Other
# ************************************
# .sass-cacheを出力するかどうか
cache = false

# クエストにクエリ文字列付けてキャッシュ防ぐ
asset_cache_buster :none

# Sassファイルをブラウザで確認
sass_options = { :debug_info => false }

# cssの主力形式 
output_style = :expanded