# TweetX

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/SH20RAJ/TweetX/blob/main/LICENSE)
[![GitHub stars](https://img.shields.io/github/stars/SH20RAJ/TweetX.svg?style=social)](https://github.com/SH20RAJ/TweetX/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/SH20RAJ/TweetX.svg?style=social)](https://github.com/SH20RAJ/TweetX/network)
[![Twitter](https://img.shields.io/twitter/url/https/github.com/SH20RAJ/TweetX.svg?style=social)](https://twitter.com/intent/tweet?text=Check%20out%20TweetX%20%E2%80%93%20A%20Twitter%20video%20player%20clone%20on%20GitHub:%20https%3A%2F%2Fgithub.com%2FSH20RAJ%2FTweetX)
[![Visitors](https://api.visitorbadge.io/api/visitors?path=https%3A%2F%2Fgithub.com%2FSH20RAJ%2FTweetX%2F&labelColor=%23d9e3f0&countColor=%232ccce4&style=flat)](https://visitorbadge.io/status?path=https%3A%2F%2Fgithub.com%2FSH20RAJ%2FTweetX%2F)
[![](https://data.jsdelivr.com/v1/package/gh/sh20raj/Tweetx/badge)](https://www.jsdelivr.com/package/gh/sh20raj/Tweetx)

A Twitter video player clone for embedding Twitter-style video players on your website.
TweetX Video Player - A Twitter/X UI HTML5 Video Player

Key Features:
- 🎥 Sleek Twitter-like Design: Get the Twitter video player look and feel on your website.
- 🎨 Customizable: Easily tweak colors and styles to match your website's theme.
- ▶️ Play, Pause, Volume Control: All the essential video player functionalities.
- 📐 Responsive: Works seamlessly on desktops, tablets, and mobile devices.
- 💻 Lightweight: Minimal footprint for fast loading times.

---

[Codepen](https://codepen.io/SH20RAJ/pen/mdgqprw?editors=1000) | [Demo](https://sh20raj.github.io/TweetX/demo.html) | [Dev.to](https://dev.to/sh20raj/tweetx-html5-twitter-like-video-player-for-your-website-31kh)

---

## Installation

To use the TweetX video player on your website, follow these steps:

1. Include the CSS file in the `<head>` section of your HTML:
   ```html
   <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/SH20RAJ/TweetX/TweetX.min.css">
   ```

2. Include the JavaScript file at the bottom of your HTML, just before the closing `</body>` tag:
   ```html
   <script src="https://cdn.jsdelivr.net/gh/SH20RAJ/TweetX/TweetX.min.js"></script>
   ```

> Use both in head tag
> ```html
> <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/SH20RAJ/TweetX/TweetX.min.css">
> <script src="https://cdn.jsdelivr.net/gh/SH20RAJ/TweetX/TweetX.min.js" defer async></script>
> ```

3. Place your `<video>` element with the `tweetx` class:
   ```html
   <video class="tweetx" poster="path/to/your/sample.png" data-viewtext="200.5K views" tabindex="-1" data-video="" allowfullscreen="false" controlslist="nodownload" >
     <source src="path/to/your/video.mp4" type="video/mp4">
   </video>
   ```
   Sample Video URL : `https://bit.ly/bbsamplevideo` | Sample Poster URL : `https://bit.ly/bbsampleposter`
---

## APIs

### Attributes
- `data-viewtext` - Sets the numbers of views
- `data-title` or `title` - Sets the Video Title
- `poster` or `date-preview-image` or `data-poster`  - Sets the poster of the video

## Usage

You can customize the TweetX video player by adjusting the CSS variables or modifying the JavaScript as needed.

### CSS Variables

You can modify the following CSS variables to change the appearance of the video player:

```css
:root {
  --primary-color: #1da1f2;        /* Main color used for controls */
  --secondary-color: #657786;      /* Secondary color for text and icons */
  --bg-color: #15202b;             /* Background color */
  --slider-color: #1da1f2;         /* Color of sliders and progress bars */
}
```

### JavaScript

The JavaScript provides various functionalities such as play, pause, volume control, etc. You can customize the behavior of these functions as needed.

---

## License

This project is licensed under the MIT License - see the [LICENSE](https://github.com/SH20RAJ/TweetX/blob/main/LICENSE) file for details.

---

## Contributions

Contributions are welcome! Please feel free to submit a pull request or open an issue if you encounter any problems or have suggestions for improvements.

---

## Acknowledgements

Special thanks to the original creator of the Twitter video player clone, [Ahmet Aksungur](https://github.com/Ahmetaksungur/twitter-video-player-clone), for the inspiration and initial implementation.

---

## Connect with Us

- Find us on [GitHub](https://github.com/SH20RAJ)
- Follow us on [Twitter](https://twitter.com/sh20raj)

---

If you find TweetX helpful, consider giving it a ⭐️ and sharing it with your friends!
