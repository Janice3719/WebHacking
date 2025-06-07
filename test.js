      // 회원 데이터
        const usersData = [
            { username: "hong", password: "hongpass123" , email : "hong@sample.com"},
            { username: "kim22", password: "kimpw2025", email : "kim22@sample.com" },
            { username: "lee33", password: "manager054", email : "lee33@sample.com" },
            { username: "JUN046", password: "history041", email : "JUN046@sample.com" },
            { username: "ELLA", password: "enfr88", email : "ELLA@sample.com" }
        ];

        function searchBoard() {
            const inputVal = document.getElementById('searchInput').value;
            // 1. 시뮬레이션: 입력값을 그대로 SQL문에 "취약"하게 끼워넣음
            // 실제 SQL 구문처럼 화면에 보여줌
            const query = `SELECT * FROM users WHERE username = '${inputVal}'`;
            document.getElementById('sqlQuery').textContent = query;

            // 2. 결과 시뮬레이션 (취약하게 파싱: ' OR 1=1 -- 으로 전체 반환)
            let result;
            // 실제 인젝션 공격 : '~' OR 1=1 -- 형태인 경우 전체검색
            if(/('|")\s*or\s*1\s*=\s*1\s*--?/i.test(inputVal)) {
                result = usersData; // 인젝션 성공, 전체 검색
            } else {
                // 평범한 경우: username이 정확히 일치하는 회원만 반환
                result = usersData.filter(b => b.username === inputVal);
            }
            showResults(result);
        }

        function showResults(data) {
            const tbody = document.getElementById('resultBody');
            tbody.innerHTML = '';
            if(data.length === 0) {
                tbody.innerHTML = `<tr><td colspan="3" style="text-align:center;color:#888;">검색 결과 없음</td></tr>`;
                return;
            }
            data.forEach(row => {
                tbody.innerHTML += `<tr><td>${row.username}</td><td>${row.password}</td><td>${row.email}</td></tr>`;
            });
        }