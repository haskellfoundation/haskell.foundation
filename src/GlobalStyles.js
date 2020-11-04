import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
.fullwidth {
  width:100%;
  height:auto
}

.clear {
  clear:both
}


@font-face {
  font-family: 'Gibson Regular';
  font-style: normal;
  font-weight: normal;
  src: local('Gibson Regular'), url('/fonts/gibson-webfont/GibsonRegular.woff') format('woff');
  }
  
  @font-face {
  font-family: 'Gibson Light';
  font-style: normal;
  font-weight: normal;
  src: local('Gibson Light'), url('/fonts/gibson-webfont/GibsonLight.woff') format('woff');
  }
  
  
  @font-face {
  font-family: 'Gibson Bold';
  font-style: normal;
  font-weight: normal;
  src: local('Gibson Bold'), url('/fonts/gibson-webfont/GibsonSemiBd.woff') format('woff');
  }

  ul, ol {
    margin-left: 3rem;
  }


${'' /**
.opacity-10
*/}
${() => {
  const opacity = []
  for (let i = 0; i <= 10; i++) {
    opacity.push(`
      .opacity-${i} {
        opacity: ${i / 10};
      }
    `)
  }
  return opacity.join('')
}}
`
