export default function getData() {
  const gradeData = JSON.parse(wx.getStorageSync('grade') || '{}')
  const { grade = [], gpa } = gradeData
  console.log(grade)
  let gradeStr = ''

  let notPassCount = 0 // 不通过的数量

  grade.forEach((item, index) => {
    if (index === 0) {
      return
    }

    if (item.passSign !== '及格') {
      notPassCount += 1
    }

    const nameStr = item.gradeName.split('').reduce((pre, name) => {
      pre += `<text class="content-span">${name}</text>`
      return pre
    }, '')

    gradeStr += `
      <view class="grade-content grade-line-${index % 2}">
        <text class="grade-content-1">${nameStr}</text>
        <text class="grade-content-2"><text class="content-span2">${item.mark}</text></text>
        <text class="grade-content-3"><text class="content-span2">${item.passSign}</text></text>
        <text class="grade-content-4"><text class="content-span2">${item.credit}</text></text>
      </view>
    `
  })

  console.log(notPassCount, gpa)

  let gradIcon = '00'

  if (notPassCount === 0 && gpa >= 3.50) {
    // 考神
    gradIcon = '00'
  } else if (notPassCount === 0 && (gpa < 3.50 && gpa >= 2.75)) {
    gradIcon = '01'
  } else if (notPassCount === 0 && gpa < 2.75) {
    gradIcon = '02'
  } else if (notPassCount === 1) {
    gradIcon = '03'
  } else if (notPassCount >= 2) {
    gradIcon = '04'
  }

  const wxml = `
    <view class="container" >
      <image class="bg1" src="../../assets/grade-share/bg.png"></image>
      <view class="gradewrap">
        <view class="grade-title">
          <text class="grade-title-1">课程</text>
          <text class="grade-title-2">成绩</text>
          <text class="grade-title-3">及格标志</text>
          <text class="grade-title-4">学分</text>
        </view>
        ${gradeStr}
        <text class="gpa">平均学分绩点(GPA): ${gpa}</text>
        <image class="yinzhang" src="../../assets/grade-share/${gradIcon}.png"></image>
      </view>

      <view class="other">
        <image class="qr" src="../../assets/grade-share/qr.png"></image>
      </view>
    </view>
  `

  //
  // marginBottom: 139
  // 139 + 20 + 20 + n * 30

  const contentHeight = 139 + 20 + 20 + (grade.length - 1) * 40 + 30

  const canvasHeight =
    38 + // 顶部 margin
    contentHeight + // 成绩部分
    40 + 96 + 60

  const style = {
    container: {
      width: 375,
      height: canvasHeight,
      backgroundColor: '#fff000'
    },

    gradewrap: {
      width: 320,
      height: contentHeight,
      borderWidth: 1.5,
      borderRadius: 20,
      borderColor: '#333333',
      backgroundColor: '#ffffff',
      marginTop: 38,
      position: 'relative',
      marginLeft: 28
    },

    gradeTitle: {
      width: 315,
      height: 20,
      marginTop: 20,
      justifyContent: 'center',
      flexDirection: 'row',
      color: '#cccccc'
    },
    gradeTitle1: {
      width: 135,
      height: 20,
      textAlign: 'center'
    },
    gradeTitle2: {
      width: 60,
      height: 20,
      textAlign: 'center'
    },
    gradeTitle3: {
      width: 60,
      height: 20,
      textAlign: 'center'
    },
    gradeTitle4: {
      width: 60,
      height: 20,
      textAlign: 'center'
    },

    gradeContent: {
      width: 315,
      height: 40,
      justifyContent: 'center',
      flexDirection: 'row',
      verticalAlign: 'center',
      lineHeight: '1.6em',
      fontSize: 12
    },
    contentSpan: {
      width: 16,
      height: 16
    },
    contentSpan2: {
      width: 60,
      height: 16
    },
    gradeLine1: {
      backgroundColor: '#ffffff'
    },
    gradeLine0: {
      backgroundColor: '#f7f7f7'
    },
    gradeContent1: {
      width: 135,
      height: 40,
      textAlign: 'center',
      justifyContent: 'center',
      flexDirection: 'row',
      alignItems: 'center',
      flexWrap: 'wrap'
    },
    gradeContent2: {
      width: 60,
      height: 40,
      textAlign: 'center',
      justifyContent: 'center',
      flexDirection: 'row',
      alignItems: 'center'
    },
    gradeContent3: {
      width: 60,
      height: 40,
      textAlign: 'center',
      justifyContent: 'center',
      flexDirection: 'row',
      alignItems: 'center'
    },
    gradeContent4: {
      width: 60,
      height: 40,
      textAlign: 'center',
      justifyContent: 'center',
      flexDirection: 'row',
      alignItems: 'center'
    },

    text1: {
      width: 200,
      height: 300
    },
    yinzhang: {
      width: 173,
      height: 99.5,
      marginTop: 18,
      marginLeft: 71
    },
    bg1: {
      width: 375,
      height: 418.5,
      position: 'absolute'
    },
    red: {
      backgroundColor: '#ff0000'
    },
    green: {
      backgroundColor: '#00ff00'
    },
    blue: {
      backgroundColor: '#0000ff',
      alignItems: 'center',
      justifyContent: 'center'
    },
    other: {
      width: 375,
      height: 96,
      marginTop: 40,
      justifyContent: 'center',
      flexDirection: 'row'
    },
    qr: {
      width: 328,
      height: 96
    },
    gpa: {
      width: 320,
      height: 20,
      color: '#000000',
      // textAlign: 'center',
      // fontSize: 20,
      marginTop: 10,
      marginLeft: 20
    }
  }

  return {
    wxml,
    style,
    height: canvasHeight
  }
}
