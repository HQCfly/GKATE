require.config({
            paths: {
                echarts: 'js/chart/radar.js'
            }
        });
        
        // 使用
        require(
            [
                'echarts',
                'echarts/chart/radar' ,
                 'echarts/chart/chord',// 使用柱状图就加载bar模块，按需加载
            ],
            function (ec) {
                // 基于准备好的dom，初始化echarts图表
                var myChart1= ec.init(document.getElementById('main1')); 
                
                var option1 = {
    title : {
        text: '霍兰德职业兴趣量表',
        x:'center',
        y:'bottom',
    },
    tooltip : {
        trigger: 'axis'
    },
    legend: {
        orient : 'vertical',
        x : 'right',
        y : 'bottom',
        data:['职业（Profession）']
    },
    toolbox: {
    	x: 'left',
        show : true,
        
        feature : {
        
            dataView : {show: true, readOnly: false},
            restore : {show: true},

        }
    },
    polar : [
       {
           indicator : [
               { text: 'A 艺术 ', max:100},
               { text: 'I 调研 ', max: 94},
               { text: 'R 实际', max:90 },
               { text: 'C 常规', max: 70},
               { text: 'E 企业', max: 45},
               { text: 'S 社会', max:23}
            ]
        }
    ],
    calculable : true,
    series : [
        {
            name: '职业vs分析（Profession vs Analysis）',
            type: 'radar',
            data : [
                {
                    value : [100, 80, 60, 40, 20, 10],
                    name : '职业（Profession）'
                },
                 {
                    value : [95, 90, 80, 60, 40, 20],
                    name : '分析（Analysis）'
                }
            ]
        }
    ]
};
                    
                // 为echarts对象加载数据 
                myChart1.setOption(option1); 
            }
        );   
        


require.config({
            paths: {
                echarts: 'js/chart/force.js'
            }
        });
     
        // 使用
        require(
            [
                'echarts',
                'echarts/chart/force' ,
                'echarts/chart/chord',// 
            ],
            function (ec) {
                // 基于准备好的dom，初始化echarts
                var myChart2 = ec.init(document.getElementById('main2')); 
                var option2 = {
    title : {
        text: 'GKATE团队成员关系图',
        x:'center',
        y:'bottom',
    },
    tooltip : {
        trigger: 'item',
        formatter: '{a} : {b}'
    },
    toolbox: {
    	x:'right',
        show : true,
        feature : {
            restore : {show: true},
            magicType: {show: true, type: ['force', 'chord']},
       
        }
    },
   
    series : [
        {
            type:'force',
            name : "队员姓名",
            ribbonType: false,
            categories : [
                {
                    name: '人物'
                },
                {
                    name: '一队'
                },
                {
                    name:'二队'
                }
            ],
            itemStyle: {
                normal: {
                    label: {
                        show: true,
                        textStyle: {
                            color: '#444'
                        }
                    },
                    nodeStyle : {
                        brushType : 'both',
                        borderColor : 'rgba(225,115,0,0.4)',
                        borderWidth : 1
                    },
                    linkStyle: {
                        type: 'curve'
                    }
                },
                emphasis: {
                    label: {
                        show: false
                        // textStyle: null      // 默认使用全局文本样式，详见TEXTSTYLE
                    },
                    nodeStyle : {
                        //r: 30
                    },
                    linkStyle : {}
                }
            },
            useWorker: false,
            minRadius : 15,
            maxRadius : 25,
            gravity: 1.1,
            scaling: 1.1,
            roam: 'move',
            nodes:[
                {category:0, name: '王龙葛', value : 9, label: '王龙葛\n指导老师'},
                {category:2, name: '杨博',value :7 },
                {category:2, name: '孔志友',value : 7},
				{category:1, name: '张一飞',value : 8},
                {category:2, name: '张竣立',value : 7},
                {category:2, name: '智攀旗',value : 7},
                {category:1, name: '李嘉哲',value : 8},            
                {category:1, name: '李志华',value : 8},
                {category:2, name: '王宇恒',value : 7},
                {category:1, name: '陈凯伦',value : 8},
                {category:2, name: '张德鑫', value: 7},
                {category:1, name: '林佳辰',value : 8},
                {category:2, name: '田加钦',value : 7},
            ],
            links : [
                {source : '杨博', target : '王龙葛', weight : 3},
                {source : '孔志友', target : '王龙葛', weight : 2},
                {source : '张竣立', target : '王龙葛', weight : 1},
                {source : '智攀旗', target : '王龙葛', weight : 2},
                {source : '李嘉哲', target : '王龙葛', weight : 6},
                {source : '林佳辰', target : '王龙葛', weight : 5},
                {source : '张一飞', target : '王龙葛', weight : 6},
                {source : '李志华', target : '王龙葛', weight : 6},
                {source : '王宇恒', target : '王龙葛', weight : 1},
                {source : '陈凯伦', target : '王龙葛', weight : 6},
                {source : '田加钦', target : '王龙葛', weight : 1},
                {source : '张德鑫', target : '王龙葛', weight : 1},
                {soruce : '王宇恒', target : '王龙葛', weight : 1},
                {soruce : '杨博' , target : '张一飞', weight : 1},
                {source : '林佳辰', target : '孔志友', weight : 1},
                {source : '林佳辰', target : '张竣立', weight : 1},
                {source : '林佳辰', target : '智攀旗', weight : 4},
                {source : '林佳辰', target : '陈凯伦', weight : 1},
                {source : '张一飞', target : '林佳辰', weight : 4},
                {source : '张一飞', target : '张竣立', weight : 1},
                {source : '陈凯伦', target : '张一飞', weight: 1},
                {source : '王宇恒', target : '林佳辰', weight : 1},
                {source : '田加钦', target : '林佳辰', weight : 1},
                {source : '林佳辰', target : '张德鑫', weight : 1},
                {source : '智攀旗', target : '张一飞', weight : 1},
                {source : '李志华', target : '张一飞', weight : 1},
                {source : '杨博', target : '林佳辰', weight: 1},
                {source : '李嘉哲', target: '李志华', weight: 5}
            ]
        }
    ]
};
var ecConfig = require('echarts/config');
function focus(param) {
    var data = param.data;
    var links = option2.series[0].links;
    var nodes = option2.series[0].nodes;
    if (
        data.source !== undefined
        && data.target !== undefined
    ) { //点击的是边
        var sourceNode = nodes.filter(function (n) {return n.name == data.source})[0];
        var targetNode = nodes.filter(function (n) {return n.name == data.target})[0];
        console.log("选中了边 " + sourceNode.name + ' -> ' + targetNode.name + ' (' + data.weight + ')');
    } else { // 点击的是点
        console.log("选中了" + data.name + '(' + data.value + ')');
    }
}
myChart2.on(ecConfig.EVENT.CLICK, focus)

myChart2.on(ecConfig.EVENT.FORCE_LAYOUT_END, function () {
    console.log(myChart2.chart.force.getPosition());
});   
                // 为echarts对象加载数据 
                myChart2.setOption(option2); 
            }
       );