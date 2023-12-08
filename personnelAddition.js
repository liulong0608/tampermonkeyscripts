// ==UserScript==
// @name         personnelAddition
// @namespace    https://gitee.com/liu-long068/TampermonkeyScript.git
// @version      0.1
// @description  工资系统人员新增
// @author       echo
// @match        *://*/*/personnel/add-staff
// @icon         none
// @grant        none
// ==/UserScript==
(function () {
    'use strict';
    const button = '<button id="myButton" class="myButtonStyle">一键新增人员</button>';
    const buttonContainer = document.createElement('div');
    buttonContainer.innerHTML = button;
    document.body.appendChild(buttonContainer);

    document.querySelector('#myButton').addEventListener('click', function () {
        setInputValue('input[formcontrolname="staffName"]', generateName());  //人员姓名
    });

    const buttonStyle = `
    position: fixed;
    top: 50%;
    right: 0;
    transform: translateY(-50%);
    padding: 0px;
    opacity: 0;
    transition: opacity 0.5s;
`
    buttonContainer.setAttribute('style', buttonStyle);

    const style = document.createElement('style');
    style.textContent = `
    .myButtonStyle {
        background-color: #4CAF50; /* Green background */
        border: none; /* No border */
        color: white; /* White text */
        padding: 15px 32px; /* Some padding */
        text-align: center; /* Centered text */
        text-decoration: none; /* No underline */
        display: inline-block;
        font-size: 16px; /* Big font size */
        margin: 4px 2px; /* Some margin */
        cursor: pointer; /* Pointer/hand icon on hover */
        border-radius: 12px; /* Rounded corners */
    }

    .myButtonStyle:hover {
        background-color: #45a049; /* Darker green background on hover */
    }
`;
    document.head.appendChild(style);

    buttonContainer.addEventListener('mouseenter', function () {
        this.style.opacity = '1';
    });

    buttonContainer.addEventListener('mouseleave', function () {
        this.style.opacity = '0';
    });

    function getRandomElement(arr) {
        /**
         * 随机返回一个数组
         * @param {Array} arr
         */
        return arr[Math.floor(Math.random() * arr.length)];
    }

    function setInputValue(selector, value) {
        /**
         * 设置输入框，触发事件
         * @param {String} selector ： 输入框的元素路径值*
         * @param {String} value： 输入框的值
         */
            // 获取元素
        const element = document.querySelector(selector);
        if (!element) return; // 如果没有找到元素，直接返回

        // 设置值
        element.value = value;

        // 创建并触发事件
        const event = new InputEvent('input', {
            'bubbles': true,
            'cancelable': true,
        });
        element.dispatchEvent(event);
    }

    function generateName() {
        /**
         * 生成随机名字
         * @type {string[]}
         */

        const firstNames = ['赵', '钱', '孙', '李', '周', '吴', '郑', '王', '冯', '陈', '褚', '卫', '蒋', '沈', '韩', '杨', '朱',
            '秦', '尤', '许', '何', '吕', '施', '张', '孔', '曹', '严', '华', '金', '魏', '陶', '姜', '戚', '谢',
            '邹', '喻', '柏', '水', '窦', '章', '云', '苏', '潘', '葛', '奚', '范', '彭', '郎', '鲁', '韦', '昌',
            '马', '苗', '凤', '花', '方', '俞', '任', '袁', '柳', '酆', '鲍', '史', '唐', '费', '廉', '岑', '薛',
            '雷', '贺', '倪', '汤', '滕', '殷', '罗', '毕', '郝', '邬', '安', '常', '乐', '于', '时', '傅', '皮',
            '卞', '齐', '康', '伍', '余', '元', '卜', '顾', '孟', '平', '黄', '和', '穆', '萧', '尹', '姚', '邵',
            '湛', '汪', '祁', '毛', '禹', '狄', '米', '贝', '明', '臧', '计', '伏', '成', '戴', '谈', '宋', '茅',
            '庞', '熊', '纪', '舒', '屈', '项', '祝', '董', '梁', '杜', '阮', '蓝', '闵', '席', '季', '麻', '强',
            '贾', '路', '娄', '危', '江', '童', '颜', '郭', '梅', '盛', '林', '刁', '锺', '徐', '丘', '骆', '高',
            '夏', '蔡', '田', '樊', '胡', '凌', '霍', '虞', '万', '支', '柯', '昝', '管', '卢', '莫', '经', '房',
            '裘', '缪', '干', '解', '应', '宗', '丁', '宣', '贲', '邓', '郁', '单', '杭', '洪', '包', '诸', '左',
            '石', '崔', '吉', '钮', '龚', '程', '嵇', '邢', '滑', '裴', '陆', '荣', '翁', '荀', '羊', '於', '惠',
            '甄', '麹', '家', '封', '芮', '羿', '储', '靳', '汲', '邴', '糜', '松', '井', '段', '富', '巫', '乌',
            '焦', '巴', '弓', '牧', '隗', '山', '谷', '车', '侯', '宓', '蓬', '全', '郗', '班', '仰', '秋', '仲',
            '伊', '宫', '甯', '仇', '栾', '暴', '甘', '钭', '厉', '戎', '祖', '武', '符', '刘', '景', '詹', '束',
            '龙', '叶', '幸', '司', '韶', '郜', '黎', '蓟', '薄', '印', '宿', '白', '怀', '蒲', '邰', '从', '鄂',
            '索', '咸', '籍', '赖', '卓', '蔺', '屠', '蒙', '池', '乔', '阴', '鬱', '胥', '能', '苍', '双', '闻',
            '莘', '党', '翟', '谭', '贡', '劳', '逄', '姬', '申', '扶', '堵', '冉', '宰', '郦', '雍', '郤', '璩',
            '桑', '桂', '濮', '牛', '寿', '通', '边', '扈', '燕', '冀', '郏', '浦', '尚', '农', '温', '别', '庄',
            '晏', '柴', '瞿', '阎', '充', '慕', '连', '茹', '习', '宦', '艾', '鱼', '容', '向', '古', '易', '慎',
            '戈', '廖', '庾', '终', '暨', '居', '衡', '步', '都', '耿', '满', '弘', '匡', '国', '文', '寇', '广',
            '禄', '阙', '东', '欧', '殳', '沃', '利', '蔚', '越', '夔', '隆', '师', '巩', '厍', '聂', '晁', '勾',
            '敖', '融', '冷', '訾', '辛', '阚', '那', '简', '饶', '空', '曾', '毋', '沙', '乜', '养', '鞠', '须',
            '丰', '巢', '关', '蒯', '相', '查', '后', '荆', '红', '游', '竺', '权', '逯', '盖', '益', '桓', '公',
            '万俟', '司马', '上官', '欧阳', '夏侯', '诸葛', '闻人', '东方', '赫连', '皇甫', '尉迟', '公羊',
            '澹台', '公冶', '宗政', '濮阳', '淳于', '单于', '太叔', '申屠', '公孙', '仲孙', '轩辕', '令狐',
            '锺离', '宇文', '长孙', '慕容', '鲜于', '闾丘', '司徒', '司空', '亓官', '司寇', '仉', '督', '子车',
            '颛孙', '端木', '巫马', '公西', '漆雕', '乐正', '壤驷', '公良', '拓跋', '夹谷', '宰父', '穀梁', '晋',
            '楚', '闫', '法', '汝', '鄢', '涂', '钦', '段干', '百里', '东郭', '南门', '呼延', '归海', '羊舌',
            '微生', '岳', '帅', '缑', '亢', '况', '後', '有', '琴', '梁丘', '左丘', '东门', '西门', '商', '牟',
            '佘', '佴', '伯', '赏', '南宫', '墨', '哈', '谯', '笪', '年', '爱', '阳', '佟', '第五', '言', '福'];
        const lastNames = ["伟", "芳", "娜", "秀英", "敏", "静", "丽", "强", "磊", "军",
            '佳', '彤', '自', '怡', '颖', '宸', '雅', '微', '羽', '馨', '思', '纾', '欣', '元', '凡', '晴', '玥',
            '宁', '佳', '蕾', '桑', '妍', '萱', '宛',
            '欣', '灵', '烟', '文', '柏', '艺', '以', '如', '雪', '璐', '言', '婷', '青', '安', '昕', '淑', '雅',
            '娅', '茹', '嘉', '幻', '辰', '妍', '雨', '蕊', '欣', '芸', '亦', '颖',
            '云', '艺', '忻', '梓', '江', '丽', '梦', '雪', '沁', '思', '羽', '雅', '访', '烟', '萱', '忆', '慧',
            '倾城', '清雅', '卿若', '诗涵', '若涵', '颜墨', '芷玥', '妍希', '夕颜', '惜颜', '倾颜', '青宣', '冥雪', '寒瑶', '月璃', '恋尘', '冰璃', '潇涵',
            '墨羽', '墨玉', '墨雨', '莫雨', '墨语', '莫语', '墨雪', '墨曦', '墨香', '陌兮', '墨兮', '沫雪', '陌雪', '墨汐', '沫兮', '墨舞', '沫儿', '墨瞳', '莫婷', '默笙', '莫桑',
            '墨蝶', '墨菲', '莫凡', '墨痕', '墨涵', '墨画', '墨荷', '墨锦', '莫菁', '墨绿', '墨兰', '莫离', '陌璃', '陌离', '莫璃', '墨黎', '墨蓝', '墨莲', '墨竹', '墨尘',
            '墨白', '墨宝', '墨冰', '莫娜', '莫念', '墨眉', '莫菲', '紫萱', '紫璇', '紫曦', '紫馨', '紫苏', '紫嫣', '紫月', '紫云', '书旗', '舒淇', '舒晴'];

        const firstName = getRandomElement(firstNames);
        const lastName = getRandomElement(lastNames);

        return firstName + lastName;
    }

})();