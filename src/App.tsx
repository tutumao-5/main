import { useState } from 'react';

interface StepData {
  step: number;
  title: string;
  desc: string;
  formula: string;
  summaryTitle: string;
  summaryFormula: string;
  color: string;
}

const stepsData: StepData[] = [
  {
    step: 0,
    title: "准备开始",
    desc: "同学们，还记得我们的停车费规则吗？一起来把表格变成神奇的函数图像吧！",
    formula: "",
    summaryTitle: "",
    summaryFormula: "",
    color: "text-gray-600"
  },
  {
    step: 1,
    title: "第一段：免费时间",
    desc: "0 到 15分钟内，一分钱都不用花！",
    formula: "停车费 = 0元  (0 - 15分钟)",
    summaryTitle: "0 - 15分钟",
    summaryFormula: "停车费 = 0元 (0 - 15分钟)",
    color: "text-green-600"
  },
  {
    step: 2,
    title: "第二段：起步价",
    desc: "超过15分钟，但在 2小时内，都是一口价 5元哦。这是一条平平的线段！",
    formula: "停车费 = 5元  (15分钟 < 时间 ≤ 2小时)",
    summaryTitle: "15分钟 - 2小时",
    summaryFormula: "停车费 = 5元",
    color: "text-blue-600"
  },
  {
    step: 3,
    title: "第三段：超过2小时啦！",
    desc: "2到3小时之间（哪怕只超了1分钟），按3小时算（进一取整）。所以是 (3-2)×10 + 5 = 15元！",
    formula: "停车费 = 15元  (2小时 < 时间 ≤ 3小时)",
    summaryTitle: "2 - 3小时",
    summaryFormula: "停车费 = 15元",
    color: "text-orange-500"
  },
  {
    step: 4,
    title: "第四段：3到4小时",
    desc: "3到4小时之间，进一取整按4小时算。计算方法：(4-2)×10 + 5 = 25元！",
    formula: "停车费 = 25元  (3小时 < 时间 ≤ 4小时)",
    summaryTitle: "3 - 4小时",
    summaryFormula: "停车费 = 25元",
    color: "text-red-500"
  },
  {
    step: 5,
    title: "第五段：4到5小时",
    desc: "4到5小时之间，进一取整按5小时算。计算方法：(5-2)×10 + 5 = 35元！规律你发现了吗？",
    formula: "停车费 = 35元  (4小时 < 时间 ≤ 5小时)",
    summaryTitle: "4 - 5小时",
    summaryFormula: "停车费 = 35元",
    color: "text-purple-600"
  },
  {
    step: 6,
    title: "第六段：5到6小时",
    desc: "5到6小时之间，进一取整按6小时算。计算方法：(6-2)×10 + 5 = 45元！",
    formula: "停车费 = 45元  (5小时 < 时间 ≤ 6小时)",
    summaryTitle: "5 - 6小时",
    summaryFormula: "停车费 = 45元",
    color: "text-rose-600"
  },
  {
    step: 7,
    title: "提炼总结计算方法",
    desc: "让我们把停车费的计算规则总结成一棵明晰的“智慧树”吧！",
    formula: "",
    summaryTitle: "",
    summaryFormula: "",
    color: "text-indigo-700"
  }
];

function TreeDiagram() {
  return (
    <div className="flex flex-col items-start justify-center h-full p-8 animate-fade-in relative">
      <div className="flex items-center gap-6 mb-12 relative z-10">
        <div className="bg-indigo-600 text-white px-8 py-4 rounded-2xl text-4xl font-black shadow-lg">
          停车费 =
        </div>
      </div>
      
      <div className="flex flex-col gap-8 pl-16 relative">
        {/* Vertical line connecting branches */}
        <div className="absolute left-4 top-0 bottom-8 w-1 bg-indigo-200 rounded-full" />
        
        {/* Branch 1 */}
        <div className="flex items-center gap-4 relative">
          <div className="absolute -left-12 top-1/2 w-12 h-1 bg-indigo-200" />
          <div className="bg-green-100 border-2 border-green-200 px-6 py-4 rounded-xl shadow-sm whitespace-nowrap">
            <span className="text-2xl font-bold text-green-700">≤ 15 分钟</span>
            <span className="mx-4 text-2xl font-black text-gray-400">——</span>
            <span className="text-3xl font-black text-green-600 italic">免费</span>
          </div>
        </div>

        {/* Branch 2 */}
        <div className="flex items-center gap-4 relative">
          <div className="absolute -left-12 top-1/2 w-12 h-1 bg-indigo-200" />
          <div className="bg-blue-100 border-2 border-blue-200 px-6 py-4 rounded-xl shadow-sm whitespace-nowrap">
            <span className="text-2xl font-bold text-blue-700">≤ 2 小时内</span>
            <span className="mx-4 text-2xl font-black text-gray-400">——</span>
            <span className="text-3xl font-black text-blue-600">5 元</span>
          </div>
        </div>

        {/* Branch 3 */}
        <div className="flex items-center gap-4 relative">
          <div className="absolute -left-12 top-1/2 w-12 h-1 bg-indigo-200" />
          <div className="bg-orange-100 border-2 border-orange-200 px-6 py-4 rounded-xl shadow-sm whitespace-nowrap">
            <span className="text-2xl font-bold text-orange-700">＞ 2 小时</span>
            <span className="mx-4 text-2xl font-black text-gray-400">——</span>
            <span className="text-2xl xl:text-3xl font-black text-orange-600">
              (小时数 - 2) × 10 + 5
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  const [currentStep, setCurrentStep] = useState(0);
  const [subStep, setSubStep] = useState(0); // 用于第3步的细分步骤
  const [isRevealed, setIsRevealed] = useState(false);

  // 坐标轴转换参数
  const svgWidth = 900;
  const svgHeight = 500;
  const padding = { top: 50, right: 120, bottom: 60, left: 80 };

  const maxX = 6;  // X轴最大 6 小时
  const maxY = 50; // Y轴最大 50 元

  // 将实际数值转换为 SVG 像素坐标
  const getX = (val: number) => padding.left + (val / maxX) * (svgWidth - padding.left - padding.right);
  const getY = (val: number) => svgHeight - padding.bottom - (val / maxY) * (svgHeight - padding.top - padding.bottom);

  const handleNext = () => {
    // 特殊逻辑：第3步的子步骤
    if (currentStep === 3 && subStep < 5) {
      setSubStep(prev => prev + 1);
      return;
    }

    if (currentStep < 7) {
      setCurrentStep(prev => prev + 1);
      setSubStep(0);
      setIsRevealed(false);
    }
  };

  const handlePrev = () => {
    // 特殊逻辑：第3步的子步骤
    if (currentStep === 3 && subStep > 0) {
      setSubStep(prev => prev - 1);
      return;
    }

    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1);
      // 如果回退到第3步，默认显示最后的完整线段
      setSubStep(currentStep - 1 === 3 ? 5 : 0);
      setIsRevealed(false);
    }
  };

  const handleReset = () => {
    setCurrentStep(0);
    setSubStep(0);
    setIsRevealed(false);
  };

  return (
    <div className="min-h-screen p-4 flex flex-col items-center">
      <div className="w-full max-w-7xl">
        <div className="bg-white rounded-3xl shadow-2xl p-6 w-full flex flex-col lg:flex-row gap-8 border-4 border-green-100">

          {/* 左侧：内容显示区 */}
          <div className="lg:w-[55%] flex flex-col">
            <div className="text-center mb-3">
              <h1 className="text-4xl font-bold text-gray-800 tracking-wider">
                {currentStep === 7 ? "停车费计算方法汇总" : "停车费与时间的“阶梯”秘密"}
              </h1>
            </div>

            {currentStep < 7 && (
              <div className="flex justify-center items-center gap-8 mb-4 bg-white py-2 px-6 rounded-full border-2 border-blue-100 shadow-sm mx-auto w-fit">
                <span className="text-xl font-bold text-gray-700">图例：</span>
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-blue-600"></div>
                  <span className="text-lg text-gray-700">实心点：<b>包含</b>该时间</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full border-4 border-blue-600 bg-white"></div>
                  <span className="text-lg text-gray-700">空心点：<b>不包含</b>该时间</span>
                </div>
              </div>
            )}

            {/* 内容区：如果是第7步则显示树状图，否则显示SVG */}
            <div className={`relative bg-gray-50 rounded-2xl border-2 border-gray-200 overflow-hidden shadow-inner min-h-[500px] flex items-center justify-center`}>
              {currentStep === 7 ? (
                <TreeDiagram />
              ) : (
                <svg 
                  viewBox={`0 0 ${svgWidth} ${svgHeight}`} 
                  className="w-full h-auto drop-shadow-md"
                >
                {/* 绘制网格背景 */}
                {[10, 20, 30, 40, 50].map(y => (
                  <line key={`grid-y-${y}`} x1={padding.left} y1={getY(y)} x2={svgWidth - padding.right} y2={getY(y)} stroke="#e5e7eb" strokeWidth="1" strokeDasharray="5,5" />
                ))}
                {[1, 2, 3, 4, 5, 6].map(x => (
                  <line key={`grid-x-${x}`} x1={getX(x)} y1={padding.top} x2={getX(x)} y2={svgHeight - padding.bottom} stroke="#e5e7eb" strokeWidth="1" strokeDasharray="5,5" />
                ))}

                {/* 绘制 X 轴和 Y 轴 */}
                <line x1={padding.left} y1={getY(0)} x2={svgWidth - padding.right} y2={getY(0)} stroke="#374151" strokeWidth="3" markerEnd="url(#arrow)" />
                <line x1={padding.left} y1={getY(0)} x2={padding.left} y2={padding.top} stroke="#374151" strokeWidth="3" markerEnd="url(#arrow)" />

                {/* 箭头定义 */}
                <defs>
                  <marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                    <path d="M 0 0 L 10 5 L 0 10 z" fill="#374151" />
                  </marker>
                </defs>

                {/* 轴标签 */}
                <text x={svgWidth - padding.right + 10} y={getY(0) + 5} fontSize="20" fill="#374151" fontWeight="bold">时长 (小时)</text>
                <text x={padding.left - 20} y={padding.top - 20} fontSize="20" fill="#374151" fontWeight="bold" textAnchor="middle">费用 (元)</text>

                {/* X 轴刻度 */}
                {[0, 1, 2, 3, 4, 5, 6].map(val => (
                  <text key={`x-${val}`} x={getX(val)} y={getY(0) + 25} fontSize="20" fill="#4b5563" textAnchor="middle" fontWeight="bold">{val}</text>
                ))}

                {/* 特殊刻度 0.25 (15分钟) */}
                {currentStep >= 1 && (
                  <g>
                    <text x={getX(0.25)} y={getY(0) + 45} fontSize="18" fill="#16a34a" textAnchor="middle" fontWeight="bold">15分钟</text>
                    <line x1={getX(0.25)} y1={getY(0)} x2={getX(0.25)} y2={getY(0) + 5} stroke="#16a34a" strokeWidth="2" />
                  </g>
                )}

                {/* Y 轴刻度 */}
                {[0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50].map(val => (
                  <text key={`y-${val}`} x={padding.left - 15} y={getY(val) + 6} fontSize="20" fill="#4b5563" textAnchor="end" fontWeight="bold">{val}</text>
                ))}

                {/* 第1段: 0 - 0.25 */}
                {currentStep >= 1 && (
                  <g className="draw-line">
                    <line x1={getX(0)} y1={getY(0)} x2={getX(0.25)} y2={getY(0)} stroke="#16a34a" strokeWidth="6" strokeLinecap="round" />
                    <circle cx={getX(0.25)} cy={getY(0)} r="6" fill="#16a34a" />
                    <text x={getX(0.125)} y={getY(0) - 15} fontSize="20" fill="#16a34a" textAnchor="middle" fontWeight="bold">0元</text>
                  </g>
                )}

                {/* 第2段: 0.25 - 2 */}
                {currentStep >= 2 && (
                  <g className="draw-line">
                    <line x1={getX(0.25)} y1={getY(0)} x2={getX(0.25)} y2={getY(5)} stroke="#3b82f6" strokeWidth="2" strokeDasharray="6,6" opacity="0.5" />
                    <line x1={getX(0.25)} y1={getY(5)} x2={getX(2)} y2={getY(5)} stroke="#3b82f6" strokeWidth="6" strokeLinecap="round" />
                    <circle cx={getX(0.25)} cy={getY(5)} r="7" fill="white" stroke="#3b82f6" strokeWidth="3" />
                    <circle cx={getX(2)} cy={getY(5)} r="6" fill="#3b82f6" />
                    <text x={getX(1)} y={getY(5) - 15} fontSize="20" fill="#3b82f6" textAnchor="middle" fontWeight="bold">5元</text>
                  </g>
                )}

                {/* 第3段: 2 - 3 (特殊逐点显示逻辑) */}
                {currentStep >= 3 && (
                  <g className="draw-line">
                    <line x1={getX(2)} y1={getY(5)} x2={getX(2)} y2={getY(15)} stroke="#f97316" strokeWidth="2" strokeDasharray="6,6" opacity="0.5" />
                    
                    {/* 子步骤 1: 2小时15分钟 */}
                    {(subStep >= 1 || currentStep > 3) && (
                      <>
                        <circle cx={getX(2.25)} cy={getY(15)} r="6" fill="#f97316" className="animate-pulse" />
                        <text x={getX(2.25)} y={getY(15) - 20} fontSize="14" fill="#f97316" textAnchor="middle" fontWeight="bold">2:15</text>
                      </>
                    )}

                    {/* 子步骤 2: 2小时30分钟 */}
                    {(subStep >= 2 || currentStep > 3) && (
                      <>
                        <circle cx={getX(2.5)} cy={getY(15)} r="6" fill="#f97316" className="animate-pulse" />
                        <text x={getX(2.5)} y={getY(15) - 20} fontSize="14" fill="#f97316" textAnchor="middle" fontWeight="bold">2:30</text>
                      </>
                    )}

                    {/* 子步骤 3: 2小时45分钟 */}
                    {(subStep >= 3 || currentStep > 3) && (
                      <>
                        <circle cx={getX(2.75)} cy={getY(15)} r="6" fill="#f97316" className="animate-pulse" />
                        <text x={getX(2.75)} y={getY(15) - 20} fontSize="14" fill="#f97316" textAnchor="middle" fontWeight="bold">2:45</text>
                      </>
                    )}

                    {/* 子步骤 4: 3小时 */}
                    {(subStep >= 4 || currentStep > 3) && (
                      <>
                        <circle cx={getX(3)} cy={getY(15)} r="6" fill="#f97316" className="animate-pulse" />
                        <text x={getX(3)} y={getY(15) - 20} fontSize="14" fill="#f97316" textAnchor="middle" fontWeight="bold">3:00</text>
                      </>
                    )}

                    {/* 子步骤 5: 完整线段 */}
                    {(subStep >= 5 || currentStep > 3) && (
                      <>
                        <line x1={getX(2)} y1={getY(15)} x2={getX(3)} y2={getY(15)} stroke="#f97316" strokeWidth="6" strokeLinecap="round" />
                        <circle cx={getX(2)} cy={getY(15)} r="7" fill="white" stroke="#f97316" strokeWidth="3" />
                        <circle cx={getX(3)} cy={getY(15)} r="6" fill="#f97316" />
                        <text x={getX(2.5)} y={getY(15) + 30} fontSize="20" fill="#f97316" textAnchor="middle" fontWeight="bold">15元</text>
                      </>
                    )}
                  </g>
                )}

                {/* 第4段: 3 - 4 */}
                {currentStep >= 4 && (
                  <g className="draw-line">
                    <line x1={getX(3)} y1={getY(15)} x2={getX(3)} y2={getY(25)} stroke="#ef4444" strokeWidth="2" strokeDasharray="6,6" opacity="0.5" />
                    <line x1={getX(3)} y1={getY(25)} x2={getX(4)} y2={getY(25)} stroke="#ef4444" strokeWidth="6" strokeLinecap="round" />
                    <circle cx={getX(3)} cy={getY(25)} r="7" fill="white" stroke="#ef4444" strokeWidth="3" />
                    <circle cx={getX(4)} cy={getY(25)} r="6" fill="#ef4444" />
                    <text x={getX(3.5)} y={getY(25) - 15} fontSize="20" fill="#ef4444" textAnchor="middle" fontWeight="bold">25元</text>
                  </g>
                )}

                {/* 第5段: 4 - 5 */}
                {currentStep >= 5 && (
                  <g className="draw-line">
                    <line x1={getX(4)} y1={getY(25)} x2={getX(4)} y2={getY(35)} stroke="#9333ea" strokeWidth="2" strokeDasharray="6,6" opacity="0.5" />
                    <line x1={getX(4)} y1={getY(35)} x2={getX(5)} y2={getY(35)} stroke="#9333ea" strokeWidth="6" strokeLinecap="round" />
                    <circle cx={getX(4)} cy={getY(35)} r="7" fill="white" stroke="#9333ea" strokeWidth="3" />
                    <circle cx={getX(5)} cy={getY(35)} r="6" fill="#9333ea" />
                    <text x={getX(4.5)} y={getY(35) - 15} fontSize="20" fill="#9333ea" textAnchor="middle" fontWeight="bold">35元</text>
                  </g>
                )}

                {/* 第6段: 5 - 6 */}
                {currentStep >= 6 && (
                  <g className="draw-line">
                    <line x1={getX(5)} y1={getY(35)} x2={getX(5)} y2={getY(45)} stroke="#e11d48" strokeWidth="2" strokeDasharray="6,6" opacity="0.5" />
                    <line x1={getX(5)} y1={getY(45)} x2={getX(6)} y2={getY(45)} stroke="#e11d48" strokeWidth="6" strokeLinecap="round" />
                    <circle cx={getX(5)} cy={getY(45)} r="7" fill="white" stroke="#e11d48" strokeWidth="3" />
                    <circle cx={getX(6)} cy={getY(45)} r="6" fill="#e11d48" />
                    <text x={getX(5.5)} y={getY(45) - 15} fontSize="20" fill="#e11d48" textAnchor="middle" fontWeight="bold">45元</text>
                  </g>
                )}
              </svg>
            )}
            </div>

            {/* 已揭晓规律汇总列表 (仅在非最后一步显示) */}
            {currentStep < 7 && stepsData.filter(data => data.step > 0 && (data.step < currentStep || (data.step === currentStep && isRevealed))).length > 0 && (
              <div className="mt-6 bg-gray-50 p-4 rounded-2xl border-2 border-gray-200 shadow-inner">
                <h3 className="text-xl font-bold text-gray-700 mb-3 flex items-center gap-2">
                  📝 已总结的计费规律：
                </h3>
                <div className="flex flex-col gap-2">
                  {stepsData.filter(data => data.step > 0 && (data.step < currentStep || (data.step === currentStep && isRevealed))).map(data => (
                    <div key={data.step} className={`bg-white px-4 py-3 rounded-lg border border-gray-200 shadow-sm flex items-center gap-4 animate-fade-in ${data.color}`}>
                      <span className="font-bold text-lg whitespace-nowrap">{data.summaryTitle}：</span>
                      <span className="font-mono font-bold text-lg xl:text-xl">{data.summaryFormula}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* 右侧：教师控制台与原理解释 */}
          <div className="w-full lg:w-[45%] flex flex-col gap-6">
            {currentStep === 7 ? (
              <div className="flex-1 flex flex-col items-center justify-center gap-8 bg-indigo-50 rounded-2xl border-2 border-indigo-100 p-8 animate-fade-in">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-indigo-800 mb-4">推导已完成！</h3>
                  <p className="text-gray-600 text-lg">您可以返回上一步重新查看函数图像</p>
                </div>
                <button 
                  onClick={handlePrev}
                  className="group flex items-center gap-4 py-6 px-10 rounded-2xl text-3xl font-black bg-white text-indigo-600 border-4 border-indigo-200 shadow-xl hover:bg-indigo-600 hover:text-white hover:border-indigo-600 transition-all active:scale-95"
                >
                  <span className="group-hover:-translate-x-2 transition-transform">⬅️</span>
                  返回图表
                </button>
              </div>
            ) : (
              <>
                <div className="bg-indigo-50 p-6 rounded-2xl border-2 border-indigo-100">
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <button 
                      onClick={handlePrev}
                      disabled={currentStep === 0}
                      className={`py-4 px-2 rounded-xl text-2xl font-bold transition-all shadow-md active:scale-95 ${currentStep === 0 ? 'bg-gray-200 text-gray-400 cursor-not-allowed' : 'bg-white text-indigo-600 border-2 border-indigo-200 hover:bg-indigo-100'}`}
                    >
                      ⬅️ 上一步
                    </button>
                    <button 
                      onClick={handleNext}
                      disabled={currentStep === 7}
                      className={`py-4 px-2 rounded-xl text-2xl font-bold transition-all shadow-md active:scale-95 ${currentStep === 7 ? 'bg-gray-200 text-gray-400 cursor-not-allowed' : 'bg-indigo-600 text-white hover:bg-indigo-700 hover:shadow-lg'}`}
                    >
                      下一步 ➡️
                    </button>
                  </div>

                  <button 
                    onClick={handleReset}
                    className="w-full py-3 rounded-xl text-xl font-bold bg-rose-100 text-rose-600 hover:bg-rose-200 transition-all"
                  >
                    🔄 重新开始推导
                  </button>
                </div>

                <div className="flex-1 bg-yellow-50 p-6 rounded-2xl border-2 border-yellow-200 flex flex-col justify-center">
                  <h2 className="text-3xl font-bold text-gray-800 mb-6">当前规律总结：</h2>
                  
                  <div className={`transition-opacity duration-500 ${stepsData[currentStep].color}`}>
                    <h3 className="text-3xl font-black mb-4">
                      {stepsData[currentStep].title}
                      {currentStep === 3 && subStep > 0 && subStep < 5 && (
                        <span className="ml-4 text-2xl text-gray-500">
                          (探究中: {subStep === 1 ? "2:15" : subStep === 2 ? "2:30" : subStep === 3 ? "2:45" : "3:00"})
                        </span>
                      )}
                    </h3>
                    
                    {currentStep === 0 || isRevealed || (currentStep === 3 && subStep > 0) ? (
                      <div className="animate-fade-in">
                        <p className="text-2xl leading-relaxed font-medium mb-6 text-gray-700">
                          {currentStep === 3 && subStep > 0 && subStep < 5 
                            ? `看，即使时间只超过了一点点（比如${subStep === 1 ? "2小时15分钟" : subStep === 2 ? "2小时30分钟" : subStep === 3 ? "2小时45分钟" : "3小时00分钟"}），费用也会固定在 15 元。`
                            : stepsData[currentStep].desc}
                        </p>
                        {(stepsData[currentStep].formula || (currentStep === 3 && subStep > 0)) && (
                          <div className="bg-white p-4 rounded-xl border border-dashed border-gray-400 shadow-sm flex justify-center items-center">
                            <p className="text-lg xl:text-2xl font-mono font-bold whitespace-nowrap text-center">
                              {currentStep === 3 && subStep > 0 && subStep < 5 
                                ? `停车费 = 15元`
                                : stepsData[currentStep].formula}
                            </p>
                          </div>
                        )}
                      </div>
                    ) : (
                      <div 
                        onClick={() => setIsRevealed(true)}
                        className="bg-white p-8 rounded-xl border-4 border-dashed border-gray-300 shadow-sm cursor-pointer hover:bg-yellow-100 hover:border-yellow-400 transition-all flex flex-col items-center justify-center gap-4 group animate-fade-in"
                      >
                        <span className="text-6xl group-hover:scale-110 transition-transform">❓</span>
                        <p className="text-xl whitespace-nowrap font-bold text-gray-500 group-hover:text-yellow-600">点击此处，揭晓本段规律</p>
                      </div>
                    )}
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
