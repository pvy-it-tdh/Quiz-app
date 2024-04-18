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
    question: "Đây là đồ thị Bode của khâu động",
    option1: "Khâu vi phân",
    option2: "Khâu tích phân",
    option3: "Khâu quán tính bậc 1",
    option4: "Khâu dao động bậc 2",
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
    question:
      "Nhận xét về đặc điểm của hệ thống có tất cả các nghiệm cực phân bố trên mặt phẳng phức như hình dưới?",
    option1: "Hệ không ổn định, không dao động",
    option2: "Hệ không ổn định, dao động",
    option3: "Hệ ổn định, không dao động",
    option4: "Hệ ổn định, dao động",
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
  // xong 131 r 
  {
    question: "",
    option1: "",
    option2: "",
    option3: "",
    option4: "",
    ans: 1,
  },
  {
    question: "",
    option1: "",
    option2: "",
    option3: "",
    option4: "",
    ans: 1,
  },
  {
    question: "",
    option1: "",
    option2: "",
    option3: "",
    option4: "",
    ans: 1,
  },
  {
    question: "",
    option1: "",
    option2: "",
    option3: "",
    option4: "",
    ans: 1,
  },
  {
    question: "",
    option1: "",
    option2: "",
    option3: "",
    option4: "",
    ans: 1,
  },
  {
    question: "",
    option1: "",
    option2: "",
    option3: "",
    option4: "",
    ans: 1,
  },
  {
    question: "",
    option1: "",
    option2: "",
    option3: "",
    option4: "",
    ans: 1,
  },
  {
    question: "",
    option1: "",
    option2: "",
    option3: "",
    option4: "",
    ans: 1,
  },
  {
    question: "",
    option1: "",
    option2: "",
    option3: "",
    option4: "",
    ans: 1,
  },
  {
    question: "",
    option1: "",
    option2: "",
    option3: "",
    option4: "",
    ans: 1,
  },
  {
    question: "",
    option1: "",
    option2: "",
    option3: "",
    option4: "",
    ans: 1,
  },
  {
    question: "",
    option1: "",
    option2: "",
    option3: "",
    option4: "",
    ans: 1,
  },
  {
    question: "",
    option1: "",
    option2: "",
    option3: "",
    option4: "",
    ans: 1,
  },
  {
    question: "",
    option1: "",
    option2: "",
    option3: "",
    option4: "",
    ans: 1,
  },
  {
    question: "",
    option1: "",
    option2: "",
    option3: "",
    option4: "",
    ans: 1,
  },
  {
    question: "",
    option1: "",
    option2: "",
    option3: "",
    option4: "",
    ans: 1,
  },
  {
    question: "",
    option1: "",
    option2: "",
    option3: "",
    option4: "",
    ans: 1,
  },
  {
    question: "",
    option1: "",
    option2: "",
    option3: "",
    option4: "",
    ans: 1,
  },
  {
    question: "",
    option1: "",
    option2: "",
    option3: "",
    option4: "",
    ans: 1,
  },
  {
    question: "",
    option1: "",
    option2: "",
    option3: "",
    option4: "",
    ans: 1,
  },
  {
    question: "",
    option1: "",
    option2: "",
    option3: "",
    option4: "",
    ans: 1,
  },
  {
    question: "",
    option1: "",
    option2: "",
    option3: "",
    option4: "",
    ans: 1,
  },
  {
    question: "",
    option1: "",
    option2: "",
    option3: "",
    option4: "",
    ans: 1,
  },


  // tới câu 68 r
];
