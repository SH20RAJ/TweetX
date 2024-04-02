(function () {
  "use strict";

  // Simulating jQuery's $ function
  function $(selector, context) {
    context = context || document;
    return context.querySelector(selector);
  }

  // Simulating jQuery's each function
  function each(collection, callback) {
    for (var i = 0; i < collection.length; i++) {
      callback.call(collection[i], i, collection[i]);
    }
  }

  function twitterVideoPlayer(rootElement) {
    const video_element = rootElement.querySelector("[data-video]");
    const video_preview = rootElement.querySelector(".video-preview");
    const video_top = rootElement.querySelector(".video-top");
    const video_start_btn = rootElement.querySelector(".video-start-btn");
    const video_control_btn = rootElement.querySelector(".video-control-btn");
    const video_control_play = rootElement.querySelector(".video-control-play");
    const video_control_pause = rootElement.querySelector(".video-control-pause");
    const video_voice = rootElement.querySelector(".video-voice");
    const video_voice_btn = rootElement.querySelector(".video-voice-btn");
    const video_voice_on = rootElement.querySelector(".video-voice-on");
    const video_voice_off = rootElement.querySelector(".video-voice-off");
    const full_screen_btn = rootElement.querySelector(".full-screen-btn");
    const full_screen_open = rootElement.querySelector(".full-screen-open");
    const full_screen_exit = rootElement.querySelector(".full-screen-exit");
    const video_voice_slider = rootElement.querySelector(".video-voice-slider-range");
    const video_voice_rail = rootElement.querySelector(".video-voice-slider-rail");
    const video_voice_buffer = rootElement.querySelector(".video-voice-slider-buffer");
    const video_slider = rootElement.querySelector(".video-slider-container");
    const video_slider_rail = rootElement.querySelector(".video-slider-rail");
    const video_slider_buffer = rootElement.querySelector(".video-slider-buffer");
    const video_count_time = rootElement.querySelector(".video-count-time");
    const video_count_fulltime = rootElement.querySelector(".video-count-fulltime");
    const video_loading = rootElement.querySelector(".video-loading");
    const video_reset = rootElement.querySelector(".video-reset");
    const video_reset_btn = rootElement.querySelector(".video-reset-btn");
    const video_contextMenu = rootElement.querySelector(".video-contextMenu");

    var vid = video_element;

    function play() {
      vid.play();
      video_control_play.style.display = "none";
      video_control_pause.style.display = "block";
    }

    function pause() {
      vid.pause();
      video_control_pause.style.display = "none";
      video_control_play.style.display = "block";
    }

    function loading() {
      if (vid.readyState === 4) {
        video_loading.style.display = "none";
        play();
      } else {
        video_loading.style.display = "block";
        pause();
      }
    }

    function voiceOn() {
      vid.muted = true;
      video_voice_on.style.display = "none";
      video_voice_off.style.display = "block";
    }

    function voiceOff() {
      vid.muted = false;
      video_voice_on.style.display = "block";
      video_voice_off.style.display = "none";
    }

    function Fullscreen(element) {
      if (element.requestFullscreen) element.requestFullscreen();
      else if (element.mozRequestFullScreen) element.mozRequestFullScreen();
      else if (element.webkitRequestFullscreen)
        element.webkitRequestFullscreen();
      else if (element.msRequestFullscreen) element.msRequestFullscreen();
      full_screen_open.style.display = "none";
      full_screen_exit.style.display = "block";
    }

    function exitFullscreen() {
      if (document.exitFullscreen) document.exitFullscreen();
      else if (document.mozCancelFullScreen) document.mozCancelFullScreen();
      else if (document.webkitExitFullscreen) document.webkitExitFullscreen();
      else if (document.msExitFullscreen) document.msExitFullscreen();
      full_screen_open.style.display = "block";
      full_screen_exit.style.display = "none";
    }

    function IsFullScreen() {
      var full_screen_element =
        document.fullscreenElement ||
        document.webkitFullscreenElement ||
        document.mozFullScreenElement ||
        document.msFullscreenElement ||
        null;

      if (full_screen_element === null) return false;
      else return true;
    }

    function updateplayer() {
      var percentage = (vid.currentTime / vid.duration) * 100;
      video_slider_rail.style.width = percentage + "%";
      video_slider_buffer.style.left = percentage - 1 + "%";
      video_count_time.textContent = getFormatedTime();
      video_count_fulltime.textContent = getFormatedFullTime();
    }

    function getTimeState() {
      var mouseX = event.pageX - video_slider.offsetLeft,
        width = video_slider.offsetWidth;

      var currentSeconeds = Math.round((mouseX / width) * vid.duration);
      var currentMinutes = Math.floor(currentSeconeds / 60);

      if (currentMinutes > 0) {
        currentSeconeds -= currentMinutes * 60;
      }
      if (currentSeconeds.toString().length === 1) {
        currentSeconeds = "0" + currentSeconeds;
      }
      if (currentMinutes.toString().length === 1) {
        currentMinutes = "0" + currentMinutes;
      }

      return currentMinutes + ":" + currentSeconeds;
    }

    function skip() {
      var mouseX = event.pageX - video_slider.offsetLeft,
        width = video_slider.offsetWidth;
      vid.currentTime = (mouseX / width) * vid.duration;
      updateplayer();
    }

    function getFormatedFullTime() {
      var totalSeconeds = Math.round(vid.duration);
      var totalMinutes = Math.floor(totalSeconeds / 60);
      if (totalMinutes > 0) {
        totalSeconeds -= totalMinutes * 60;
      }
      if (totalSeconeds.toString().length === 1) {
        totalSeconeds = "0" + totalSeconeds;
      }
      if (totalMinutes.toString().length === 1) {
        totalMinutes = "0" + totalMinutes;
      }
      return totalMinutes + ":" + totalSeconeds;
    }

    function getFormatedTime() {
      var seconeds = Math.round(vid.currentTime);
      var minutes = Math.floor(seconeds / 60);

      if (minutes > 0) {
        seconeds -= minutes * 60;
      }
      if (seconeds.toString().length === 1) {
        seconeds = "0" + seconeds;
      }
      if (minutes.toString().length === 1) {
        minutes = "0" + minutes;
      }
      return minutes + ":" + seconeds;
    }

    video_start_btn.addEventListener("click", function () {
      video_preview.style.display = "none";
      play();
    });

    vid.addEventListener("progress", loading);

    video_control_btn.addEventListener("click", function () {
      if (vid.paused) {
        play();
      } else {
        pause();
      }
    });

    video_top.addEventListener("click", function () {
      if (vid.paused) {
        play();
      } else {
        pause();
      }
    });

    video_voice_btn.addEventListener("click", function () {
      if (vid.muted === false) {
        voiceOn();
      } else {
        voiceOff();
      }
    });

    full_screen_btn.addEventListener("click", function () {
      if (IsFullScreen()) exitFullscreen();
      else Fullscreen(video_element);
    });

    video_top.addEventListener("dblclick", function () {
      if (IsFullScreen()) exitFullscreen();
      else Fullscreen(video_element);
    });

    video_voice_slider.addEventListener("input", function () {
      var range = video_voice_slider.value;
      vid.volume = range;
      video_voice_buffer.style.width = range * 100 + "%";
      if (range == 0) {
        voiceOn();
      } else {
        voiceOff();
      }
    });

    video_voice_slider.addEventListener("change", function () {
      var range = video_voice_slider.value;
      localStorage.setItem("videoVoice", range);
    });

    video_voice_slider.value = localStorage.getItem("videoVoice") || 1;

    video_voice_slider.addEventListener("keyup", function () {
      var range = video_voice_slider.value;
      vid.volume = range;
      video_voice_buffer.style.width = range * 100 + "%";
      if (range == 0) {
        voiceOn();
      } else {
        voiceOff();
      }
    });

    video_slider.addEventListener("click", skip);

    updateplayer();
    video_count_fulltime.textContent = getFormatedFullTime();

    vid.addEventListener("timeupdate", function () {
      updateplayer();
    });

    video_slider_buffer.addEventListener("input", function () {
      updateplayer();
    });

    video_slider_buffer.addEventListener("mousemove", function () {
      updateplayer();
    });

    video_slider_buffer.addEventListener("mouseup", function () {
      updateplayer();
    });

    video_voice.addEventListener("mouseenter", function () {
      video_slider.style.display = "none";
    });

    video_voice.addEventListener("mouseleave", function () {
      video_slider.style.display = "block";
    });

    vid.addEventListener("ended", function () {
      video_reset.style.display = "flex";
    });

    video_reset_btn.addEventListener("click", function () {
      play();
      video_reset.style.display = "none";
    });

    video_element.addEventListener("contextmenu", function (event) {
      event.preventDefault();
      video_contextMenu.style.display = "block";
      video_contextMenu.style.top = event.clientY + "px";
      video_contextMenu.style.left = event.clientX + "px";
    });

    window.addEventListener("click", function () {
      video_contextMenu.style.display = "none";
    });
  }

  window.twitterVideoPlayer = twitterVideoPlayer;

  // Apply the twitterVideoPlayer function to all elements with class 'video'
  var videoPlayers = document.querySelectorAll(".video");
  each(videoPlayers, function (index, player) {
    twitterVideoPlayer(player);
  });

  // New Function to create Twitter video players from <video> elements
  function createTwitterVideoPlayers() {
    const videos = document.querySelectorAll("video.tweetx");

    videos.forEach((video) => {
      const videoPlayerHTML = `
        <div class="video">
          <div class="video-preview" style=" background-image: url(${video.poster | video.getAttribute(
            "data-preview-image"
          )});">
            <button class="video-start-btn">
              <svg width="60" height="60" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path d="M256,0C114.833,0,0,114.844,0,256s114.833,256,256,256s256-114.844,256-256S397.167,0,256,0z M357.771,264.969
                  l-149.333,96c-1.75,1.135-3.771,1.698-5.771,1.698c-1.75,0-3.521-0.438-5.104-1.302C194.125,359.49,192,355.906,192,352V160
                  c0-3.906,2.125-7.49,5.563-9.365c3.375-1.854,7.604-1.74,10.875,0.396l149.333,96c3.042,1.958,4.896,5.344,4.896,8.969
                  S360.813,263.01,357.771,264.969z" />
              </svg>
            </button>
          </div>
          <div class="video-top"></div>
          <div class="video-loading">
            <div class="video-loading-spinner"></div>
          </div>
          <div class="video-reset">
            <button class="video-reset-btn">Watch again</button>
          </div>
          <div class="video-player-controls">
            <div class="video-slider">
              <div class="video-slider-container">
                <div class="video-slider-bg">
                  <div class="video-slider-rail"></div>
                  <div class="video-slider-buffer"></div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="wrap">
                <div class="video-control">
                  <button class="video-control-btn">
                    <svg class="video-control-play" viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" shape-rendering="geometricPrecision">
                      <polygon points="5 3 19 12 5 21 5 3" fill="currentColor"></polygon>
                    </svg>
                    <svg class="video-control-pause" viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" shape-rendering="geometricPrecision">
                      <rect x="6" y="4" width="4" height="16" fill="currentColor"></rect>
                      <rect x="14" y="4" width="4" height="16" fill="currentColor"></rect>
                    </svg>
                  </button>
                </div>
                <div class="video-views">${video.datalist.viewtext || '725.5K views'}</div>
              </div>
              <div class="wrap">
                <div class="video-counts"><span class="video-count-time">0:25</span><span class="video-count-line">/</span><span class="video-count-fulltime">0:52</span></div>
                <div class="video-voice">
                  <div class="video-voice-slider">
                    <div class="video-voice-slider-rail" role="slider">
                      <div class="video-voice-slider-buffer"></div>
                      <input class="video-voice-slider-range" type="range" min="0" max="1" value="1" step="0.01" />
                    </div>
                  </div>
                  <button class="video-voice-btn">
                    <svg class="video-voice-on" viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" fill="none" shape-rendering="geometricPrecision">
                      <path d="M11 5L6 9H2v6h4l5 4V5z"></path>
                      <path d="M19.07 4.93a10 10 0 010 14.14M15.54 8.46a5 5 0 010 7.07"></path>
                    </svg>
                    <svg class="video-voice-off" viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" fill="none" shape-rendering="geometricPrecision" style="">
                      <path d="M11 5L6 9H2v6h4l5 4V5z"></path>
                      <path d="M23 9l-6 6"></path>
                      <path d="M17 9l6 6"></path>
                    </svg>
                  </button>
                </div>
                <div class="full-screen">
                  <button class="full-screen-btn">
                    <svg class="full-screen-open" viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" fill="none" shape-rendering="geometricPrecision">
                      <path d="M15 3h6v6"></path>
                      <path d="M9 21H3v-6"></path>
                      <path d="M21 3l-7 7"></path>
                      <path d="M3 21l7-7"></path>
                    </svg>
                    <svg class="full-screen-exit" viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" fill="none" shape-rendering="geometricPrecision">
                      <path d="M4 14h6v6"></path>
                      <path d="M20 10h-6V4"></path>
                      <path d="M14 10l7-7"></path>
                      <path d="M3 21l7-7"></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div class="video-player">
            ${video.outerHTML}
          </div>
          <div class="video-contextMenu">
            <button class="video-contextMenu-btn">Copy Video Adress</button>
          </div>
        </div>
      `;

      // Create a temporary container
      const tempContainer = document.createElement('div');
      tempContainer.innerHTML = videoPlayerHTML;

      // Replace the original <video> element with the video player
      video.parentNode.replaceChild(tempContainer.firstElementChild, video);
    });
  }

  // Call the function to create Twitter video players from <video> elements with class 'tweetx'
  createTwitterVideoPlayers();

  // Apply the twitterVideoPlayer function to all elements with class 'video'
  var videoPlayers = document.querySelectorAll(".video");
  each(videoPlayers, function (index, player) {
    twitterVideoPlayer(player);
  });
})();
