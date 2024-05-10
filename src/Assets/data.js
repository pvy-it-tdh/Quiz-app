export const data = [
  {
    question: "Hệ SISO là hệ thống có",
    option1: "Một ngõ vào - một ngõ ra",
    option2: "Nhiều ngõ vào - một ngõ ra  ",
    option3: "Một ngõ vào-nhiều ngõ ra",
    option4: "Nhiều ngõ vào nhiều ngõ ra",
    ans: 1,
  },
  {
    question: "Hệ thống tuyến tính là hệ thống",
    option1: "Được mô tả bởi phương trình vi phân tuyến tính",
    option2: "Được mô tả bởi phương trình sai phân tuyến tính",
    option3: "North Tất cả các khâu trong hệ thống đều là tuyến tính",
    option4: "Cả ba câu kia đều đúng",
    ans: 4,
  },
  {
    question: "Hàm truyền (hàm truyền đạt) của hệ thống là",
    option1:
      "Tỉ số giữa tín hiệu ra và tín hiệu vào của hệ thống đó biểu diễn theo biến đổi Laplace với điều kiện đầu không đổi",
    option2: "Tỉ số giữa tín hiệu ra và tín hiệu vào của hệ thống đó",
    option3:
      "Tỉ số giữa tín hiệu ra và tín hiệu vào của hệ thống đó biểu diễn theo thời gian",
    option4:
      "Tỉ số giữa tín hiệu ra và tín hiệu vào của hệ thống đó biểu diễn theo biến đổi Laplace với điều kiện đầu bằng không",
    ans: 4,
  },
  {
    question: "Đa thức đặc trưng của hệ thống là",
    option1: "Mối liên hệ giữa tín hiệu ra và tín hiệu vào của hệ thống",
    option2: "Đa thức mẫu số của hàm truyền đạt của đối tượng điều khiển",
    option3: "Đa thức mẫu số của hàm truyền đạt của hệ thống",
    option4: "Đa thức tử số của hàm truyền đạt của hệ thống",
    ans: 3,
  },
  {
    question:
      "Nghiệm đa thức mẫu số của phương trình đặc trưng được gọi là gì?",
    option1: "Các điểm uốn",
    option2: "Các điểm cực (pole)",
    option3: "Các điểm cực trị",
    option4: "Các điểm không (zero)",
    ans: 2,
  },
  {
    question: "Nghiệm đa thức tử số của phương trình đặc trưng được gọi là gì?",
    option1: "Các điểm uốn",
    option2: "Các điểm cực (pole)",
    option3: "Các điểm cực trị",
    option4: "Các điểm không (zero)",
    ans: 4,
  },
  {
    question: "Hàm truyền đạt của hệ thống phụ thuộc vào?",
    option1: "Tín hiệu vào",
    option2: "Tín hiệu ra",
    option3: "Tín hiệu vào, tín hiệu ra, thông số và cấu trúc của hệ thống",
    option4: "Thông số và cấu trúc hệ thống",
    ans: 4,
  },
  {
    question: "Đáp ứng biên độ của đặc tính tần số cho biết",
    option1: "Tỷ lệ về biên độ giữa tín hiệu vào và tín hiệu ra theo tần số",
    option2: "Biên độ của tín hiệu lối ra theo tần số",
    option3: "Tỷ lệ về biên độ giữa tín hiệu vào và tín hiệu ra theo thời gian",
    option4: "Biên độ giữa tín hiệu ngõ ta ra theo thời gian",
    ans: 1,
  },
  {
    question: "Đáp ứng pha của đặc tính tần số cho biết",
    option1: "Độ lệch pha theo tần số của tín hiệu lối ra",
    option2:
      "Độ lệch pha theo tần số của tín hiệu lối ra so với tín hiệu lối vào",
    option3: "Góc pha của hệ thống",
    option4: "Cả ba câu kia đều sai",
    ans: 2,
  },
  {
    question: "Hàm quá độ là:",
    option1: "Lối ra hệ thống khi tín hiệu vào là hàm nấc đơn vịs",
    option2: "Đáp ứng nấc",
    option3: "Cả ## A và ## B đều sai",
    option4: "Lối ra hệ thống khi tín hiệu vào là xung Diract",
    ans: 4,
  },
  {
    question: "Hàm trọng lượng là:",
    option1: "Lối ra hệ thống khi tín hiệu vào là xung Diract",
    option2: "Đáp ứng xung",
    option3: "Biến đổi Laplace ngược của hàm truyền đạt",
    option4: "Cả ba câu kia đều đúng",
    ans: 4,
  },
  {
    question:
      "Khâu động học cơ bản nào mà đáp ứng biên tần logarithm có độ dốc +20dB/dec?",
    option1: "Khâu tích phân lý tưởng",
    option2: "Khâu vi phân lý tưởng",
    option3: "Khâu quán tính bậc 1",
    option4: "Khâu sớm pha bậc 1",
    ans: 2,
  },
  {
    question:
      "Khâu động học cơ bản nào mà đáp ứng biên tần logarithm có độ dốc +40dB/dec?",
    option1: "Khâu dao động bậc 2",
    option2: "Khâu vi phân lý tưởng",
    option3: "Khâu quán tính bậc 1",
    option4: "Khâu sớm pha bậc 1",
    ans: 1,
  },
  {
    question:
      "Thêm khâu động học cơ bản nào vào hệ thống mà không làm thay đổi biên độ của hệ thống?",
    option1: "Khâu tỉ lệ",
    option2: "Khâu dao động",
    option3: "Khâu trễ",
    option4: "Khâu sớm pha bậc 1",
    ans: 3,
  },
  {
    question:
      "Thêm khâu động học cơ bản nào vào hệ thống mà không làm thay đổi pha của hệ thống?",
    option1: "Khâu tỉ lệ",
    option2: "Khâu dao động",
    option3: "Khâu trễ",
    option4: "Khâu sớm pha bậc 1",
    ans: 1,
  },
  {
    question: "Đặc tính pha tần của khâu động học nào sau đây là không đổi?",
    option1: "Khâu tích phân lý tưởng",
    option2: "Khâu vi phân lý tưởng",
    option3: "Khâu tỉ lệ",
    option4: "Cả ba câu kia đều đúng",
    ans: 3,
  },
  {
    question: "Đây là đặc tính pha tần của khâu động học nào?",
    option1: "Khâu quán tính bậc 1",
    option2: "Khâu dao động bậc 2",
    option3: "Khâu tích phân",
    option4: "Khâu trễ",
    ans: 1,
  },
  {
    question: "Đâu là phát biểu đúng về khâu quán tính bậc 1?",
    option1:
      "Chỉ có 1 cực thực âm nên đáp ứng quá độ không có vọt lố (không bị quá điều chỉnh)",
    option2:
      "Chỉ có 1 cực ảo nên đáp ứng quá độ không có vọt lố (không bị quá điều chỉnh)",
    option3:
      "Chỉ có 1 cực thực dương nên đáp ứng quá độ không có vọt lố (không bị quá điều chỉnh)",
    option4:
      "Chỉ có 1 cực thực âm nên đáp ứng quá độ có vọt lố (bị quá điều chỉnh)",
    ans: 1,
  },
  {
    question:
      "Phương trình đặc trưng của hệ thống được mô tả dưới dạng hàm truyền đạt là?",
    option1: "Đa thức tử số hàm truyền đạt bằng 0",
    option2: "Đa thức mẫu số hàm truyền đạt bằng 0",
    option3: "Phương trình tín hiệu vào bằng 0",
    option4: "Phương trình tín hiệu ra bằng 0",
    ans: 2,
  },
  {
    question: "Hệ thống điều khiển được gọi là ổn định nếu",
    option1: "Tất cả các cực của hệ thống có phần thực dương",
    option2: "Tất cả các cực của hệ thống có phần thực âm",
    option3: "Tất cả các cực của hệ thống âm",
    option4: "Hệ thống có một số cực có phần thực âm",
    ans: 2,
  },
  {
    question: "Hệ thống điều khiển không ổn định nếu",
    option1: "Tất cả các cực của hệ thống có phần thực dương",
    option2: "Có ít nhất một nghiệm cực có phần thực dương",
    option3: "Có các nghiệm zero dương",
    option4: "Không xác định được",
    ans: 2,
  },
  {
    question: "Hệ thống điều khiển là ở biên giới ổn định nếu",
    option1: "Tất cả các cực của hệ thống có phần thực dương",
    option2:
      "Có cực có phần thực bằng không, tất cả các cực còn lại có phần thực âm",
    option3:
      "Có cực có phần thực bằng không, tất cả các cực còn lại có phần thực dương",
    option4: "Có cực có phần thực bằng không, một số cực có phần thực âm",
    ans: 2,
  },
  {
    question: "Điều kiện cần và đủ để hệ thống tuyến tính liên tục ổn định là:",
    option1: "Tất cả các định thức con của ma trận Hurwitz đều dương",
    option2: "Các phần tử ở cột thứ nhất của bảng Routh khác không",
    option3: "Các phần tử ở cột thứ nhất của bảng Routh cùng dấu",
    option4: "Các phần tử ở hàng thứ nhất của bảng Routh cùng dấu",
    ans: 1,
  },
  {
    question: "Các phần tử ở hàng 1 của bảng Routh được lập từ:",
    option1: "Các hệ số có chỉ số bất kỳ trong phương trình đặc trưng",
    option2: "Các hệ số có chỉ số chẵn trong phương trình đặc trưng",
    option3: "Các hệ số có chỉ số tăng dần trong phương trình đặc trưng",
    option4: "Các hệ số có chỉ số giảm dần trong phương trình đặc trưng",
    ans: 2,
  },
  {
    question: "Các phần tử ở hàng 2 của bảng Routh được lập từ:",
    option1: "Các hệ số có chỉ số lẻ trong phương trình đặc trưng",
    option2: "Các hệ số có chỉ số bất kỳ trong phương trình đặc trưng",
    option3: "Các hệ số có chỉ số tăng dần trong phương trình đặc trưng",
    option4: "Các hệ số có chỉ số giảm dần trong phương trình đặc trưng",
    ans: 1,
  },
  {
    question:
      "Điều kiện cần và đủ để hệ thống liên tục tuyến tính ổn định theo tiêu chuẩn Hurwitz là?",
    option1: "Tất cả các định thức Hurwitz dương",
    option2: "Tất cả các định thức Hurwitz không âm",
    option3: "Tất cả các định thức Hurwitz âm",
    option4: "Có định thức Hurwitz dương",
    ans: 1,
  },
  {
    question: "Ở trạng thái xác lập, sai số (sai lệch tĩnh )là ",
    option1: "Sai lệch giữa tín hiệu đặt và tín hiệu điều khiển",
    option2: "Sai lệch giữa tín hiệu đo và tín hiệu đặt",
    option3: "Sai lệch giữa tín hiệu đo và tín hiệu điều khiển",
    option4: "Sai lệch giữa tín hiệu đặt và tín hiệu đo",
    ans: 2,
  },
  {
    question: "Hiện tượng vọt lố là hiện tượng:",
    option1: "Đáp ứng của hệ thống vượt quá giá trị xác lập của nó",
    option2: "Đáp ứng của hệ thống dao động quanh giá trị xác lập",
    option3: "Giá trị lớn nhất của đáp ứng chính là giá trị xác lập",
    option4: "Đáp ứng của hệ thống tiến về giá trị đặt",
    ans: 1,
  },
  {
    question:
      "Khi thêm một cực có phần thực âm vào hàm truyền hệ hở thì quỹ đạo nghiệm số của hệ thống kín có xu hướng",
    option1: "Tiến xa ra khỏi trục ảo",
    option2: "Tiến gần về phía trục ảo",
    option3: "Không thay đổi",
    option4: "Cả ba câu kia đều sai",
    ans: 2,
  },
  {
    question: "Khi thêm một cực có phần thực âm vào hàm truyền hệ hở thì",
    option1: "Hệ thống sẽ kém ổn định",
    option2: "Độ dự trữ biên tăng",
    option3: "Độ dự trữ pha tăng",
    option4: "Cả 3 ý đều đúng",
    ans: 1,
  },
  {
    question:
      "Khi thêm một zero có phần thực âm vào hàm truyền hệ hở thì quỹ đạo nghiệm số của hệ thống kín có xu hướng",
    option1: "Tiến xa ra khỏi trục ảo",
    option2: "Tiến gần về phía trục ảo",
    option3: "Không thay đổi ",
    option4: "Cả 3 ý đều sai ",
    ans: 1,
  },
  {
    question: "Khi thêm một zero có phần thực âm vào hàm truyền hệ hở thì",
    option1: "Hệ thống sẽ ổn định hơn",
    option2: "Độ dự trữ biên giảm",
    option3: "Độ dự trữ pha giảm",
    option4: "Cả 3 ý đều đúng",
    ans: 1,
  },
  {
    question: "Với khâu dao động bậc 2, độ vọt lố của hệ thống phụ thuộc vào?",
    option1: "Hệ số khuếch đại của hệ thống",
    option2: "Hệ số tắt và tần số dao động riêng",
    option3: "Hệ số tắt ",
    option4: "Tần số dao động riêng",
    ans: 3,
  },
  {
    question:
      "Với khâu dao động bậc 2, thời gian quá độ của hệ thống phụ thuộc vào?",
    option1: "Hệ số khuếch đạic của hệ thống ",
    option2: "Hệ số tắt và tần số dao động riêng",
    option3: "Hệ số tắt ",
    option4: "Tần số dao động riêng",
    ans: 2,
  },
  {
    question: "Sai số xác lập của hệ thống kín càng lớn khi",
    option1: "Biên độ của hệ hở ở miền tần số thấp càng lớn",
    option2: "Biên độ của hệ hở ở miền tần số thấp càng nhỏ",
    option3: "Biên độ của hệ hở ở miền tần số cao càng lớn",
    option4: "Biên độ của hệ hở ở miền tần số cao càng nhỏ",
    ans: 2,
  },
  {
    question: "Thời gian quá độ của hệ thống kín càng nhỏ khi",
    option1: "Tần số cắt biên hệ hở càng thấp",
    option2: "Tần số cắt biên hệ hở càng cao",
    option3: "Tần số cắt pha hệ hở càng thấp",
    option4: "Tần số cắt pha hệ hở càng cao",
    ans: 2,
  },
  {
    question: "Khâu hiệu chỉnh nào sau đây cải thiện sai số xác lập ?",
    option1: "Khâu hiệu chỉnh sớm trễ pha ",
    option2: "Khâu hiệu chỉnh trễ pha ",
    option3: "Khâu hiệu chỉnh vi tích phân tỉ lệ PD",
    option4: "Cả ## A và ## B đều đúng",
    ans: 4,
  },
  {
    question:
      "Khâu hiệu chỉnh nào sau đây vừa cải thiện đáp ứng quá độ vừa giảm sai số xác lập?",
    option1: "Khâu hiệu chỉnh sớm trễ pha",
    option2: "Khâu hiệu chỉnh vi tích phân tỉ lệ PID",
    option3: "Cả ## A và ## B đều đúng",
    option4: "Cả ## A và ## B đều sai",
    ans: 3,
  },
  {
    question:
      "Khi thiết kế bộ điều khiển bù sớm pha (khâu hiệu chỉnh sớm pha) thì:",
    option1:
      "Chọn zero và cực của bộ điều khiển phải theo phương pháp triệt tiêu nghiệm",
    option2: "Chọn zero và cực của bộ điều khiển càng nhỏ càng tốt",
    option3: "Chọn zero và cực của bộ điều khiển theo góc pha cần bù",
    option4:
      "Chọn zero và cực của bộ điều khiển phải theo phương pháp đường phân giác",
    ans: 3,
  },
  {
    question:
      "Nếu muốn thay đổi độ vọt lố khi thiết kế bộ điều khiển PID thì nên thay đổi thông số nào?",
    option1: "Hệ số tỉ lệ",
    option2: "Thời hằng tích phân",
    option3: "Thời hằng vi phân",
    option4: "3 câu kia đều đúng",
    ans: 2,
  },
  {
    question:
      "Nếu muốn thay đổi thời gian xác lập khi thiết kế bộ điều khiển PID thì nên thay đổi thông số nào?",
    option1: "Hệ số tỉ lệ",
    option2: "Thời hằng tích phân",
    option3: "Thời hằng vi phân",
    option4: "3 câu kia đều đúng",
    ans: 3,
  },
  {
    question: "Phát biểu nào sau đây là đúng?",
    option1: "Sai số xác lập của hệ thống phụ thuộc vào tín hiệu lối vào",
    option2: "Sai số xác lập của hệ thống phụ thuộc vào cấu trúc của hệ thống",
    option3: "Sai số xác lập của hệ thống phụ thuộc vào tín hiệu lối ra",
    option4: "Câu A và B đều đúng",
    ans: 4,
  },
  {
    question:
      "Muốn sai số xác lập của hệ thống (đối với tín hiệu vào là hàm nấc) bằng 0 thì hàm truyền GH phải có",
    option1: "Ít nhất 1 khâu tích phân lý tưởng",
    option2: "1 khâu tích phân lí tưởng",
    option3: "Ít nhất 2 khâu tích phân lý tưởng",
    option4: "Ít nhất 3 khâu tích phân lý tưởng",
    ans: 1,
  },
  {
    question:
      "Muốn sai số xác lập của hệ thống (đối với tín hiệu vào là hàm dốc) bằng 0 thì hàm truyền GH phải có",
    option1: "Ít nhất 1 khâu tích phân lý tưởng",
    option2: "1 khâu tích phân lí tưởng",
    option3: "Ít nhất 2 khâu tích phân lý tưởng",
    option4: "Ít nhất 3 khâu tích phân lý tưởng",
    ans: 3,
  },
  {
    question:
      "Muốn sai số xác lập của hệ thống (đối với tín hiệu vào là hàm parabol) bằng 0 thì hàm truyền GH phải có",
    option1: "Ít nhất 1 khâu tích phân lý tưởng",
    option2: "1 khâu tích phân lí tưởng",
    option3: "Ít nhất 2 khâu tích phân lý tưởng",
    option4: "Ít nhất 3 khâu tích phân lý tưởng",
    ans: 4,
  },
  {
    question:
      "Khâu hiệu chỉnh nào sau đây cải thiện đáp ứng quá độ (độ vọt lố, thời gian quá độ…)?",
    option1: "Khâu hiệu chỉnh sớm pha ",
    option2: "Khâu hiệu chỉnh trễ pha",
    option3: "Khâu hiệu chỉnh tích phân tỉ lệ PI",
    option4: "Cả ba câu kia đều sai",
    ans: 1,
  },
  {
    question: "Hệ thống không có vột ló khi ",
    option1: "Tất cả nghiệm cực của hệ thống là cực thực âm",
    option2: "Có cực phức có phần thực âm nằm gần gốc tọa độ",
    option3: "Có cực phức có phần thực âm",
    option4: "Có cực có phần thực bằng 0",
    ans: 1,
  },
  {
    question: "Đáp ứng của hệ thống càng nhanh khi ",
    option1: "Cặp cực quyết định của hệ thống nằm càng gần gốc tọa độ",
    option2: "Cặp cực quyết định của hệ thống nằm càng xa gốc tọa độ",
    option3: "Các zero của hệ thống nằm gần gốc tọa độ",
    option4: "Các zero của hệ thống nằm xa gốc tọa độ",
    ans: 2,
  },
  {
    question: "Với hệ quán tính bậc nhất, phát biểu nào sau đây là không đúng?",
    option1: "Đáp ứng quá độ không có vọt lố",
    option2: "Cực càng xa trục ảo thì hệ thống đáp ứng càng chậm",
    option3: "Thời điểm đáp ứng đạt 63% giá trị xác lập chính là thời hằng T",
    option4: "Thời hằng T càng lớn khi cực càng gần trục ảo",
    ans: 2,
  },
  {
    question: "Với hệ dao động bậc 2, phát biểu nào sau đây là sai?",
    option1: "Thời gian quá độ theo tỉ lệ nghịch với tần số dao động",
    option2: "Cực càng xa trục ảo thì độ vọt lố càng thấp",
    option3: "Cực càng xa trục thực thì độ vọt lố càng thấp",
    option4: "Cực càng gần trục ảo thì thời gian quá độ càng chậm",
    ans: 3,
  },
  {
    question: "Phát biểu nào sau đây không đúng",
    option1: "Hệ số vị trí là nghịch đảo của sai số gia tốc",
    option2: "Hệ số vị trí là nghịch đảo của sai số vị trí",
    option3: "Hệ số vị trí là nghịch đảo của sai số vận tốc",
    option4: "cả ba câu kia đều đúng",
    ans: 4,
  },
  {
    question: "Đối với hệ thống hồi tiếp âm",
    option1:
      "Sai số xác lập của hệ kín chỉ phụ thuộc vào biên độ của hệ hở ở miền tần số thấp",
    option2:
      "Hệ hở có biên độ ở miền tần số thấp càng cao thì hệ kín có sai số xác lập càng nhỏ",
    option3: "Hệ hở có tần số cắt biên càng cao thì thời gian quá độ càng nhỏ",
    option4: "Cả ba câu kia đều đúng",
    ans: 4,
  },
  {
    question: "Hàm truyền đạt của hệ thống rời rạc là:",
    option1:
      "Phương trình sai phân mô tả quan hệ giữa tín hiệu lối vào và tín hiệu lối ra",
    option2:
      "Tỷ số giữa biến đổi Laplace của tín hiệu lối ra và tín hiệu lối vào với điều kiện ban đầu bằng 0",
    option3: "Tỷ số giữa biến đổi Z của tín hiệu lối ra và tín hiệu lối vào",
    option4: "Cả 3 câu kia đều đúng",
    ans: 3,
  },
  {
    question: "Lấy mẫu tín hiệu là ",
    option1:
      "Biến đổi từ tín hiệu liên tục theo thời gian thành tín hiệu rời rạc theo thời gian",
    option2:
      "Biến đổi từ tín hiệu rời rạc theo thời gian thành tín hiệu liên tục theo thời gian",
    option3: "Chọn tín hiệu ngẫu nhiên",
    option4: "Cả ba câu kia đều sai",
    ans: 1,
  },
  {
    question: "Mô hình toán học của hệ rời rạc là:",
    option1:
      "Phương trình đại số mô tả quan hệ giữa tín hiệu vào và tín hiệu ra",
    option2: "Phương vi phân số mô tả quan hệ giữa tín hiệu vào và tín hiệu ra",
    option3:
      "Phương trình sai phân mô tả quan hệ giữa tín hiệu vào và tín hiệu ra",
    option4: "Cả ba câu kia đều sai",
    ans: 3,
  },
  {
    question: "Khâu giữ chậm bậc 0 (ZOH) có tác dụng",
    option1: "Giữ tín hiệu không đổi trong thời gian một chu kỳ",
    option2: "Giữ tín hiệu không đổi các lần lấy mẫu",
    option3: "Chuyển tín hiệu liên tục thành tính hiệu rời rạc",
    option4: "Tất cả phương án trên đều đúng",
    ans: 1,
  },
  {
    question: "Hàm truyền đạt của hệ thống rời rạc phụ thuộc vào",
    option1: "Cấu trúc của hệ thống",
    option2: "Thông số của hệ thống",
    option3: "Chu kỳ lấy mẫu",
    option4: "Cả ba câu kia đều đúng",
    ans: 4,
  },
  {
    question: "ADC là ",
    option1: "Bộ chuyển đổi tín hiệu từ dạng tương tự sang số",
    option2: "Bộ chuyển đổi tín hiệu từ dạng số sang tương tự",
    option3: "Bộ khuếch đại",
    option4: "Bộ làm méo tín hiệu",
    ans: 1,
  },
  {
    question: "DAC là",
    option1: "Bộ chuyển đổi tín hiệu từ dạng số sang tương tự",
    option2: "Bộ thay đổi tần số tín hiệu vào",
    option3: "Bộ khuếch đại tín hiệu đầu ra",
    option4: "Bộ chuyển đổi tín hiệu từ dạng tương tự sang số",
    ans: 1,
  },
  {
    question: "Bản chất của biến đổi Z là gì?",
    option1: "Rời rạc hóa tín hiệu",
    option2: "Tuyến tính hóa tín hiệu phi tuyến",
    option3: "Lấy đạo hàm tín hiệu",
    option4: "Lấy tích phân tín hiệu",
    ans: 1,
  },

  {
    question: "Nếu bỏ qua sai số lượng tử thì:",
    option1: "Các bộ DAC chính là các bộ giữ mẫu bậc không (ZOH)",
    option2: "Các bộ ADC chính là các bộ giữ mẫu bậc không (ZOH)",
    option3: "Các bộ nhân tín hiệu chính là các bộ giữ mẫu bậc không (ZOH)",
    option4: "Các bộ so sánh chính là các bộ giữ mẫu bậc không (ZOH)",
    ans: 1,
  },
  {
    question:
      "Hệ rời rạc được biểu diễn bằng phương trình sai phân. Tìm hàm truyền đạt của hệ thống này bằng cách nào?",
    option1:
      "Biến đổi Z hai vế của phương trình sai phân, tìm tỉ số giữa tín hiệu ra và tín hiệu vào",
    option2:
      "Biến đổi Z hai vế của phương trình sai phân, tìm tỉ số giữa tín hiệu vào và tín hiệu ra",
    option3:
      "Biến đổi Laplace hai vế của phương trình sai phân, tìm tỉ số giữa tín hiệu ra và tín hiệu vào",
    option4:
      "Biến đổi Laplace hai vế của phương trình sai phân, tìm tỉ số giữa tín hiệu vào và tín hiệu ra",
    ans: 1,
  },
  {
    question: "Hệ rời rạc ổn định khi:",
    option1: "Tất cả các điểm cực nằm trong đường tròn đơn vị",
    option2: "Tất cả các điểm không nằm trong đường tròn đơn vị",
    option3: "Tất cả các điểm cực có phần thực dương",
    option4: "Tất cả các điểm cực có phần thực âm",
    ans: 1,
  },

  // 241 r
  {
    question: "Hệ rời rạc ổn định khi",
    option1: "Tất cả các phương án đều sai",
    option2: "Các hệ số của phương trình đặc trưng dương",
    option3: "Cột đầu tiên của bảng Routh dương",
    option4: "Các nghiệm của phương trình đặc trưng nằm bên trái trục ảo",
    ans: 1,
  },
  {
    question: "Phát biểu nào sau đây là đúng cho hệ rời rạc",
    option1:
      "Hệ rời rạc ổn định khi tất cả các điểm cực nàm trong đường tròn đơn vị",
    option2:
      "Hệ rời rạc ổn định khi tất cả các hệ số của phương trình đặc trưng dương",
    option3:
      "Hệ rời rạc ổn định khi tất cả các số hạng trong cột đầu tiên của bảng Routh dương",
    option4: "Tất cả cả các phát biểu đều sai.",
    ans: 1,
  },
  {
    question:
      "Điều kiện cần và đủ để hệ thống rời rạc ổn định theo tiêu chuẩn Jury là:",
    option1: "Tất cả các hệ số ở hàng lẻ của bảng Jury đều dương",
    option2: "Tất cả các hệ số ở hàng lẻ cột 1 của bảng Jury đều dương",
    option3: "Tất cả các hệ số ở hàng chẵn của bảng Jury đều dương",
    option4: "Tất cả các hệ số ở hàng chẵn cột 1 của bảng Jury đều dương",
    ans: 2,
  },
  {
    question:
      "Giao điểm của quỹ đạo nghiệm số hệ thống rời rạc với vòng tròn đơn vị được xác định bằng cách áp dụng:",
    option1: "Tiêu chuẩn Routh mở rộng",
    option2: "Tiêu chuẩn Hurwitz mở rộng",
    option3: "Thay z=a+jb (a^2+b^2 =1) vào phương trình đặc trưng",
    option4: "Cả ba câu kia đều đúng",
    ans: 4,
  },
  {
    question: "Cặp cực quyết định của hệ rời rạc là cặp cực:",
    option1: "Nằm gần trục ảo nhất",
    option2: "Nằm gần trục thực nhất",
    option3: "Nằm bên ngoài và gần vòng tròn đơn vị nhất",
    option4: "Nằm bên trong và gần vòng tròn đơn vị nhất",
    ans: 4,
  },
  {
    question: "Để tìm đáp ứng của hệ thống rời rạc rạc c(k) thì:",
    option1: "Tính C(z) rồi biến đổi Z ngược tìm c(k)",
    option2: "Tính nghiệm của phương trình trạng thái x(k) sau đó suy ra c(k)",
    option3: "Cả A và B đều đúng",
    option4: "Cả A và B đều sai",
    ans: 3,
  },
  {
    question: "Độ vọt lố của hệ thống rời rạc được tính dựa vào:",
    option1: "Giá trị cực đại và giá trị xác lập của đáp ứng thời gian c(k)",
    option2: "Cặp cực quyết định",
    option3: "Cả A và B đều đúng",
    option4: "Cả A và B đều sai",
    ans: 3,
  },
  {
    question: "Thời gian quá độ của hệ thống rời rạc được tính dựa vào:",
    option1: "Giá trị xác lập của đáp ứng thời gian c(k)",
    option2: "Cặp cực quyết định",
    option3: "Cả A và B đều đúng",
    option4: "Cả A và B đều sai",
    ans: 3,
  },
  // // tới câu 250 r
  {
    question: "Phát biểu nào sau đây là không đúng?",
    option1:
      "Có thể thiết kế trực tiếp hệ thống rời rạc theo phương pháp quỹ đạo nghiệm số",
    option2:
      "Có thể thiết kế trực tiếp hệ thống rời rạc theo phương pháp phân bố cực",
    option3:
      "Có thể thiết kế gián tiếp hệ thống điều khiển liên tục sau đó rời rạc hóa với chu kỳ lấy mẫu T đủ lớn",
    option4:
      "Có thể thiết kế trực tiếp hệ thống rời rạc theo phương pháp biểu đồ Bode",
    ans: 3,
  },
  {
    question:
      "Trong hệ thống rời rạc, để xác định các tham số PID tối ưu, phương pháp nào thường được sử dụng?",
    option1: "Phương pháp dự đoán",
    option2: "Phương pháp Ziegler-Nichols",
    option3: "Phương pháp Laplace",
    option4: "Phương pháp Nyquist",
    ans: 2,
  },
  {
    question:
      "Khi tần số lấy mẫu (sampling frequency) tăng lên, hệ thống có xu hướng trở nên:",
    option1: "Ổn định hơn",
    option2: "Kém ổn định",
    option3: "Không thay đổi",
    option4: "Thời gian phản ứng không thay đổi",
    ans: 2,
  },
  {
    question:
      "Tần số lấy mẫu (sampling frequency) trong thiết kế bộ điều khiển PID cho hệ thống rời rạc thường ảnh hưởng đến:",
    option1: "Thời gian phản ứng của hệ thống",
    option2: "Hệ số P, I và D",
    option3: "Khoảng đặc trưng (characteristic range) của hệ thống",
    option4: "Cả ba câu kia đều đúng",
    ans: 4,
  },
  {
    question:
      "Để hệ thống được coi là ổn định sử dụng phương pháp RouthHurwitz mở rộng, tất cả các phần tử của cột đầu tiên trong bảng Routh-Hurwitz phải:",
    option1: "Dương",
    option2: "Âm",
    option3: "Bằng không",
    option4: "Số phức",
    ans: 1,
  },
  {
    question:
      "Trong bảng Routh-Hurwitz mở rộng, nếu một dòng của bảng chỉ chứa các giá trị không và không có giá trị khác, điều này có ý nghĩa gì về tính ổn định của hệ thống?",
    option1: "Hệ thống ổn định",
    option2: "Hệ thống không ổn định",
    option3: "Chưa thể kết luận được tính ổn định",
    option4: "Hệ thống không có phản hồi",
    ans: 3,
  }
];
