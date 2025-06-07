 // 슬라이드 도움말 전환
    function showSlide(idx) {
      var slides = document.querySelectorAll('.help-slide');
      slides.forEach(function(slide,i){slide.classList.toggle('active',i===idx);});
      document.getElementById('prevBtn').disabled = idx===0;
      document.getElementById('nextBtn').disabled = idx===slides.length-1;
    }
    // 검색 기능 (XSS 실습용: 취약상태!)
    function searchBoard() {
      var inputVal = document.getElementById("searchInput").value;
      var type = document.getElementById("searchType").value;
      var items = document.querySelectorAll(".board-list li:not(.board-list-header)");
      document.getElementById("searchDisplay").innerHTML = '검색어: ' + inputVal;
      items.forEach(function(item) {
        var text = "";
        if(type === "title") {
          text = item.querySelector(".title").textContent.toLowerCase();
        } else {
          text = item.querySelector(".writer").textContent.toLowerCase();
        }
        item.style.display = text.includes(inputVal.toLowerCase()) ? "" : "none";
      });
    }