import React from 'react';
import { useTheme } from '../../providers';
import { StyledNoRowsTemplate, StyledNoRowsTemplateContainer } from './styles';
import { HeadingSmall, ParagraphMedium } from '../typography';
import { NoRowsTemplateProps } from './types';

export const NoRowsTemplate = ({ translations }: NoRowsTemplateProps) => {
  const {
    theme: {
      current: {
        sizing: { scale900 },
        colors: { primary },
      },
    },
  } = useTheme();

  return (
    <StyledNoRowsTemplate>
      <StyledNoRowsTemplateContainer>
        <svg width="377" height="264" viewBox="0 0 377 264" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M376.809 58.1252C376.47 77.5639 362.77 92.0699 350.827 104.934C338.884 117.797 326.623 135.439 330.335 154.345C331.62 160.896 334.742 166.663 336.759 172.932C339.983 182.973 340.184 194.077 338.06 204.583C336.634 211.692 334.115 218.537 330.593 224.874C322.16 239.894 309.054 250.324 295.074 256.677C286.281 260.675 276.97 263.21 267.588 263.149C260.775 263.105 254.025 261.701 247.307 260.314C211.854 252.999 176.347 246.069 140.786 239.526C107.965 233.481 74.8732 225.934 41.7284 223.966C29.8963 223.262 18.2416 215.541 10.2944 204.583C8.87525 202.625 7.58494 200.576 6.43168 198.45C-0.632912 185.417 -2.37186 167.691 3.7074 153.936C6.09316 148.538 9.52269 143.946 12.3014 138.836C20.3795 123.971 22.5517 105.566 23.7869 87.792C25.0221 70.0177 25.5621 51.784 31.0187 35.2368C36.4753 18.6896 48.1361 3.8028 62.6905 2.22707C77.0453 0.665443 89.9695 11.8567 103.657 17.3617C130.729 28.2427 159.902 16.6263 187.761 9.27957C233.755 -2.87648 282.09 -3.09287 328.191 8.65089C339.435 11.5102 350.823 15.2117 360.284 23.1589C369.744 31.106 377.047 44.1068 376.809 58.1252Z"
            fill="#B6B3F4"
          />
          <path
            d="M127.976 205.629C127.976 205.629 47.6666 143.67 47.5397 125.851C47.4127 108.033 60.8386 122.563 72.9911 144.73C76.2574 150.692 72.981 114.634 86.677 150.908C100.373 187.182 91.2974 137.82 103.017 165.482C114.736 193.144 127.976 205.629 127.976 205.629Z"
            fill="#EFEDFF"
          />
          <path
            d="M120.446 197.251C120.446 197.251 83.0419 166.216 74.1698 168.313C65.2978 170.411 74.1517 175.328 86.6467 178.673C90.0077 179.571 71.6833 182.324 91.38 184.718C111.077 187.111 85.4397 188.615 100.611 191.083C115.782 193.551 120.446 197.251 120.446 197.251Z"
            fill="#EFEDFF"
          />
          <path
            d="M246.622 199.181C246.622 199.181 326.931 137.222 327.058 119.403C327.185 101.585 313.759 116.115 301.607 138.282C298.341 144.244 301.607 108.186 287.921 144.46C274.235 180.734 283.313 131.372 271.583 159.044C259.854 186.716 246.622 199.181 246.622 199.181Z"
            fill="#EFEDFF"
          />
          <path
            d="M254.152 190.803C254.152 190.803 291.556 159.772 300.43 161.869C309.304 163.967 300.448 168.884 287.951 172.228C284.592 173.127 302.915 175.88 283.218 178.273C263.521 180.667 289.162 182.158 273.987 184.625C258.812 187.091 254.152 190.803 254.152 190.803Z"
            fill="#EFEDFF"
          />
          <path
            d="M276.865 39.7442V203.185C276.863 203.979 276.705 204.765 276.4 205.498C276.094 206.231 275.647 206.897 275.084 207.457C274.521 208.018 273.854 208.461 273.119 208.763C272.385 209.066 271.598 209.22 270.804 209.218H106.613C105.819 209.22 105.032 209.066 104.298 208.763C103.563 208.461 102.896 208.018 102.333 207.457C101.77 206.897 101.323 206.231 101.017 205.498C100.712 204.765 100.554 203.979 100.552 203.185V39.7442C100.554 38.9501 100.712 38.164 101.017 37.4309C101.323 36.6978 101.77 36.0321 102.333 35.4719C102.896 34.9116 103.563 34.4678 104.298 34.1657C105.032 33.8636 105.819 33.7092 106.613 33.7113H270.804C271.598 33.7092 272.385 33.8636 273.119 34.1657C273.854 34.4678 274.521 34.9116 275.084 35.4719C275.647 36.0321 276.094 36.6978 276.4 37.4309C276.705 38.164 276.863 38.9501 276.865 39.7442Z"
            fill="#6559D2"
          />
          <path
            d="M276.865 69.4514V203.247C276.863 204.033 276.707 204.81 276.405 205.536C276.103 206.261 275.661 206.919 275.104 207.473C274.547 208.028 273.887 208.467 273.16 208.766C272.434 209.065 271.656 209.218 270.87 209.216H106.547C105.761 209.218 104.983 209.065 104.257 208.766C103.531 208.467 102.871 208.028 102.314 207.474C101.757 206.92 101.315 206.262 101.013 205.537C100.711 204.812 100.554 204.035 100.552 203.249V69.4534L276.865 69.4514Z"
            fill="#EFEDFF"
          />
          <path d="M155.31 80.3406H112.64V104.249H155.31V80.3406Z" fill="#6559D2" />
          <path d="M210.033 80.3406H167.364V104.249H210.033V80.3406Z" fill="#6559D2" />
          <path d="M264.755 80.3406H222.085V104.249H264.755V80.3406Z" fill="white" />
          <path d="M155.31 114.976H112.64V138.884H155.31V114.976Z" fill="white" />
          <path d="M210.033 114.976H167.364V138.884H210.033V114.976Z" fill="white" />
          <path d="M264.755 114.976H222.085V138.884H264.755V114.976Z" fill="white" />
          <path d="M155.31 149.61H112.64V173.518H155.31V149.61Z" fill="white" />
          <path d="M210.033 149.61H167.364V173.518H210.033V149.61Z" fill="white" />
          <path d="M264.755 149.61H222.085V173.518H264.755V149.61Z" fill="white" />
          <path
            d="M150.645 57.0471C153.235 57.0471 155.334 54.9577 155.334 52.3804C155.334 49.803 153.235 47.7136 150.645 47.7136C148.055 47.7136 145.956 49.803 145.956 52.3804C145.956 54.9577 148.055 57.0471 150.645 57.0471Z"
            fill="white"
          />
          <path
            d="M226.772 57.0471C229.362 57.0471 231.461 54.9577 231.461 52.3804C231.461 49.803 229.362 47.7136 226.772 47.7136C224.182 47.7136 222.083 49.803 222.083 52.3804C222.083 54.9577 224.182 57.0471 226.772 57.0471Z"
            fill="white"
          />
          <path
            d="M346.896 131.743C350.103 131.743 352.703 129.143 352.703 125.936C352.703 122.729 350.103 120.129 346.896 120.129C343.689 120.129 341.089 122.729 341.089 125.936C341.089 129.143 343.689 131.743 346.896 131.743Z"
            fill="#B6B3F4"
          />
          <path
            d="M341.619 143.356C343.368 143.356 344.786 141.938 344.786 140.188C344.786 138.439 343.368 137.021 341.619 137.021C339.869 137.021 338.451 138.439 338.451 140.188C338.451 141.938 339.869 143.356 341.619 143.356Z"
            fill="#B6B3F4"
          />
          <path
            d="M53.1655 72.6694C57.6547 72.6694 61.294 69.0301 61.294 64.5409C61.294 60.0516 57.6547 56.4124 53.1655 56.4124C48.6762 56.4124 45.037 60.0516 45.037 64.5409C45.037 69.0301 48.6762 72.6694 53.1655 72.6694Z"
            fill="white"
          />
          <path
            d="M73.8556 92.6178C76.3038 92.6178 78.2886 90.6331 78.2886 88.1848C78.2886 85.7366 76.3038 83.7518 73.8556 83.7518C71.4073 83.7518 69.4225 85.7366 69.4225 88.1848C69.4225 90.6331 71.4073 92.6178 73.8556 92.6178Z"
            fill="white"
          />
          <path
            d="M288.149 216.875C288.149 216.875 303.026 191.236 288.223 197.14C268.073 205.176 278.475 180.782 262.877 179.482C245.973 178.072 260.588 203.294 240.78 195.401C231.612 191.75 236.146 216.871 236.146 216.871L288.149 216.875Z"
            fill="#DCD9FF"
          />
          <path
            d="M87.8013 212.24C87.8013 212.24 86.7636 168.023 104.637 186.872C122.51 205.72 121.21 202.145 133.233 194.996C145.257 187.847 148.183 212.24 148.183 212.24H87.8013Z"
            fill="#DCD9FF"
          />
          <path
            d="M277.252 150.709C277.171 154.001 276.98 157.289 276.796 160.582C276.613 163.875 276.371 167.159 276.107 170.456C275.843 173.752 275.561 177.03 275.257 180.317L274.781 185.248L274.274 190.176L274.251 189.513L274.32 194.444L274.358 199.377C274.37 202.668 274.362 205.959 274.332 209.25C274.296 212.545 274.241 215.839 274.145 219.14C274.048 222.44 273.943 225.739 273.725 229.048C273.684 229.667 273.423 230.252 272.987 230.695C272.552 231.138 271.973 231.41 271.354 231.462C270.735 231.515 270.118 231.343 269.615 230.979C269.112 230.615 268.756 230.083 268.611 229.479C267.848 226.255 267.201 223.017 266.534 219.783C265.867 216.549 265.281 213.306 264.692 210.064C264.104 206.822 263.55 203.578 263.012 200.334L262.222 195.464L261.462 190.591L261.44 189.928L261.124 184.984L260.838 180.037C260.658 176.742 260.495 173.446 260.366 170.149C260.237 166.853 260.14 163.56 260.056 160.276C259.971 156.991 259.935 153.687 259.981 150.402C260.013 148.112 260.954 145.928 262.596 144.331C264.238 142.734 266.448 141.855 268.738 141.887C271.029 141.919 273.213 142.86 274.81 144.502C276.407 146.144 277.286 148.354 277.254 150.644L277.252 150.709Z"
            fill="#39327F"
          />
          <path
            d="M294.893 223.877C294.224 222.71 293.575 221.536 292.926 220.359C292.278 219.182 291.623 218.009 290.988 216.828C290.353 215.648 289.712 214.469 289.082 213.286L288.135 211.513L287.2 209.736C285.946 207.368 284.723 204.988 283.492 202.611L279.845 195.463C279.76 195.299 279.698 195.123 279.662 194.942L279.482 194.053L277.336 183.39L275.221 172.724C274.527 169.166 273.824 165.611 273.151 162.045C272.478 158.478 271.781 154.928 271.124 151.365C270.697 149.048 271.207 146.656 272.543 144.715C273.879 142.774 275.932 141.444 278.249 141.016C280.566 140.589 282.958 141.099 284.899 142.435C286.84 143.772 288.171 145.824 288.598 148.141C288.644 148.383 288.679 148.643 288.703 148.885C289.058 152.49 289.376 156.1 289.71 159.709C290.045 163.318 290.351 166.929 290.668 170.538L291.582 181.375L292.465 192.215L292.102 190.805L294.117 198.573C294.774 201.168 295.437 203.759 296.07 206.363L296.549 208.313L297.019 210.27C297.332 211.571 297.64 212.876 297.944 214.183C298.252 215.489 298.548 216.802 298.836 218.11C299.124 219.418 299.425 220.73 299.697 222.049C299.821 222.654 299.725 223.284 299.427 223.824C299.129 224.365 298.648 224.782 298.071 225.001C297.493 225.219 296.857 225.224 296.275 225.016C295.694 224.807 295.206 224.399 294.899 223.863L294.893 223.877Z"
            fill="#9387FF"
          />
          <path
            d="M282.636 156.425C282.636 156.425 282.789 160.066 286.93 159.737L288.995 192.552L297.373 221.04"
            stroke="#C3C3F6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M262.721 159.147L263.588 189.949L270.171 227.953"
            stroke="#6559D6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M301.109 225.602L305.248 230.927L302.83 234.554L301.621 233.386C301.621 233.386 295.084 249.931 292.658 248.468C290.232 247.005 297.466 228.721 297.466 228.721L301.109 225.602Z"
            fill="#39327F"
          />
          <path
            d="M274.302 233.773L274.1 240.513L269.925 241.778L269.742 240.11C269.742 240.11 254.166 248.706 253.219 246.032C252.272 243.358 269.502 233.867 269.502 233.867L274.302 233.773Z"
            fill="#9387FF"
          />
          <path
            d="M259.084 113.57L247.897 114.797L242.303 115.401L239.507 115.722L238.108 115.875C237.641 115.921 237.177 115.99 236.698 116.012L233.915 116.141L232.787 114.68L218.313 95.9406L218.798 96.3577L216.737 94.8203C216.266 94.4663 215.948 93.9465 215.847 93.3664C215.745 92.7863 215.868 92.1893 216.191 91.6966C216.513 91.2038 217.011 90.8522 217.583 90.7131C218.156 90.574 218.759 90.6578 219.272 90.9474L221.505 92.2189L221.632 92.2914L221.99 92.636L239.077 109.022L235.164 107.69C235.612 107.541 236.069 107.44 236.522 107.315L237.883 106.961L240.605 106.249L246.045 104.825L256.926 101.978C258.443 101.578 260.056 101.797 261.41 102.587C262.765 103.377 263.751 104.673 264.15 106.189C264.55 107.705 264.33 109.318 263.54 110.673C262.751 112.028 261.455 113.013 259.939 113.413C259.658 113.484 259.372 113.537 259.084 113.57Z"
            fill="#65B1F8"
          />
          <path
            d="M272.855 94.0244C272.855 94.0244 271.66 100.978 269.865 102.175L277.82 102.338L279.17 90.9274L272.855 94.0244Z"
            fill="#FFAA17"
          />
          <path
            d="M291.097 153.713C279.283 151.589 259.102 164.562 259.576 152.395C261.22 120.217 256.253 102.643 256.253 102.643C256.251 102.525 256.273 102.408 256.317 102.298C256.361 102.189 256.426 102.089 256.508 102.005C256.591 101.921 256.69 101.854 256.798 101.809C256.907 101.763 257.024 101.74 257.142 101.74L286.077 101.79C286.587 101.791 287.076 101.992 287.438 102.351C287.801 102.709 288.008 103.195 288.016 103.704C288.016 103.704 285.547 134.625 291.097 153.713Z"
            fill="#85B1F8"
          />
          <path
            d="M265.178 71.5611C265.178 71.5611 259.187 93.4964 267.318 98.0785C274.336 102.032 284.731 86.5809 284.731 86.5809C284.731 86.5809 290.754 75.0954 282.112 70.2211C273.47 65.3468 265.178 71.5611 265.178 71.5611Z"
            fill="#FCBD3D"
          />
          <path
            d="M265.395 83.5504C265.083 85.4526 263.632 86.7966 262.153 86.5528C260.674 86.3089 259.735 84.574 260.042 82.6739C260.348 80.7737 260.475 79.3088 263.282 79.6715C266.185 80.0564 265.708 81.6503 265.395 83.5504Z"
            stroke="#39327F"
            strokeMiterlimit="10"
          />
          <path
            d="M273.189 84.155C272.877 86.0551 271.346 87.379 269.764 87.1271C268.182 86.8752 267.159 85.1121 267.471 83.218C267.783 81.3239 267.856 79.8167 270.896 80.2459C274.044 80.6912 273.502 82.2548 273.189 84.155Z"
            stroke="#39327F"
            strokeMiterlimit="10"
          />
          <path d="M280.744 82.3595L273.175 84.1831" stroke="#39327F" strokeMiterlimit="10" />
          <path
            d="M267.304 83.6652C267.194 83.5387 267.06 83.4351 266.909 83.3605C266.759 83.2858 266.596 83.2415 266.428 83.2301C266.261 83.2187 266.093 83.2404 265.934 83.294C265.775 83.3475 265.628 83.4319 265.502 83.5423"
            stroke="#39327F"
            strokeMiterlimit="10"
          />
          <path
            d="M273.304 92.6319C274.189 92.6319 274.906 91.9147 274.906 91.03C274.906 90.1453 274.189 89.4281 273.304 89.4281C272.42 89.4281 271.702 90.1453 271.702 91.03C271.702 91.9147 272.42 92.6319 273.304 92.6319Z"
            fill="#FF8017"
          />
          <path
            d="M290.817 105.093L302.189 127.643L302.415 128.088C302.63 128.517 302.738 128.992 302.729 129.472L302.141 157.481C302.143 158.085 301.91 158.666 301.49 159.1C301.071 159.535 300.498 159.789 299.894 159.807C299.291 159.826 298.703 159.609 298.257 159.202C297.811 158.794 297.542 158.229 297.506 157.626L295.161 129.72L295.699 131.55L281.129 110.92C280.28 109.692 279.951 108.18 280.212 106.711C280.472 105.242 281.302 103.935 282.521 103.074C283.74 102.213 285.249 101.868 286.721 102.114C288.193 102.359 289.508 103.176 290.381 104.385C290.542 104.611 290.688 104.847 290.817 105.093Z"
            fill="#85B1F8"
          />
          <path
            d="M281.141 84.8576C281.763 83.237 281.529 81.6396 280.618 81.2896C279.707 80.9397 278.464 81.9699 277.841 83.5905C277.219 85.2111 277.453 86.8086 278.364 87.1585C279.275 87.5084 280.518 86.4783 281.141 84.8576Z"
            fill="#FCBD3D"
          />
          <path
            d="M291.097 60.8876C285.497 57.8208 279.222 59.8801 279.222 59.8801C279.222 59.8801 277.965 57.0591 273.397 54.5646C259.441 46.9217 247.694 68.3754 259.153 74.6481C264.063 77.3381 274.753 72.4316 280.482 75.577C277.763 77.1668 277.884 84.5135 277.884 84.5135C277.884 84.5135 280.024 80.812 282.736 82.297C285.449 83.7821 281.548 88.2533 280.04 87.4272C280.512 89.5329 278.807 93.71 278.807 93.71C278.807 93.71 283.782 90.2039 285.6 86.8872C287.417 83.5705 285.787 82.4542 287.887 78.6257C289.986 74.7972 291.731 76.3084 294.774 70.7511C295.647 69.1451 296.696 63.9524 291.097 60.8876Z"
            fill="#39327F"
          />
          <path d="M217.813 89.6599L222.498 93.0209L219.119 96.9562L215.838 94.0526L217.813 89.6599Z" fill="#FCBD3D" />
          <path
            d="M209.513 90.8749L212.217 89.1843C212.425 89.0594 212.672 89.0149 212.91 89.0592C213.148 89.1036 213.362 89.2337 213.511 89.425C213.66 89.6163 213.733 89.8556 213.718 90.0975C213.702 90.3394 213.599 90.5672 213.427 90.7379L211.131 92.9544C210.879 93.1981 210.539 93.3314 210.188 93.325C209.837 93.3185 209.503 93.1729 209.259 92.9202C209.016 92.6674 208.882 92.3282 208.889 91.9771C208.895 91.626 209.041 91.2919 209.294 91.0482C209.361 90.9834 209.435 90.9253 209.513 90.8749Z"
            fill="#F8A015"
          />
          <path
            d="M211.446 92.38L213.515 90.0809C213.679 89.8992 213.904 89.7843 214.147 89.7584C214.39 89.7325 214.634 89.7974 214.833 89.9406C215.031 90.0839 215.169 90.2953 215.221 90.5344C215.273 90.7734 215.234 91.0231 215.113 91.2355L213.58 93.9235C213.398 94.2144 213.111 94.4237 212.779 94.5076C212.447 94.5916 212.095 94.5435 211.797 94.3735C211.499 94.2036 211.279 93.925 211.183 93.5961C211.086 93.2673 211.12 92.9138 211.279 92.6097C211.326 92.5273 211.382 92.4502 211.446 92.38Z"
            fill="#F8A015"
          />
          <path
            d="M213.854 93.1418L215.063 90.6835C215.17 90.4653 215.354 90.2941 215.58 90.2024C215.805 90.1108 216.056 90.1051 216.285 90.1863C216.515 90.2676 216.706 90.4302 216.824 90.6433C216.941 90.8564 216.976 91.1052 216.922 91.3424L216.318 94.0204C216.279 94.2051 216.2 94.3794 216.088 94.5314C215.976 94.6835 215.833 94.8099 215.668 94.9021C215.503 94.9944 215.32 95.0504 215.132 95.0665C214.944 95.0825 214.754 95.0582 214.576 94.9952C214.398 94.9322 214.236 94.8319 214.099 94.701C213.963 94.5701 213.856 94.4117 213.786 94.2362C213.716 94.0608 213.684 93.8725 213.693 93.6837C213.701 93.495 213.75 93.3102 213.835 93.1418H213.854Z"
            fill="#F8A015"
          />
          <path
            d="M215.429 91.2557L210.473 87.4272L210.555 87.4756L206.63 85.0576C206.493 84.9702 206.395 84.8345 206.354 84.6777C206.313 84.521 206.333 84.3545 206.409 84.2114C206.485 84.0684 206.612 83.9593 206.765 83.9059C206.918 83.8525 207.086 83.8586 207.234 83.9231L211.434 85.8313L211.514 85.8797L216.923 89.0332C217.08 89.1191 217.219 89.2358 217.331 89.3763C217.442 89.5168 217.525 89.6783 217.573 89.8512C217.621 90.0241 217.634 90.205 217.611 90.383C217.588 90.561 217.53 90.7326 217.439 90.8876C217.349 91.0427 217.228 91.178 217.084 91.2856C216.941 91.3932 216.777 91.4708 216.603 91.514C216.428 91.5571 216.247 91.5649 216.07 91.5368C215.893 91.5087 215.723 91.4453 215.57 91.3504C215.522 91.3218 215.474 91.2902 215.429 91.2557Z"
            fill="#FFAA17"
          />
          <path
            d="M216.334 91.9811L211.585 88.9586L213.291 88.5718L210.904 91.3666C210.773 91.5215 210.59 91.6231 210.389 91.6519C210.189 91.6807 209.985 91.6348 209.816 91.5228C209.647 91.4108 209.525 91.2406 209.473 91.0446C209.421 90.8486 209.444 90.6405 209.535 90.4598L211.182 87.1713C211.315 86.9063 211.548 86.7049 211.829 86.6112C212.11 86.5175 212.417 86.5392 212.683 86.6716L212.729 86.6958L212.888 86.7865L217.785 89.551C217.946 89.6423 218.088 89.7645 218.202 89.9106C218.316 90.0568 218.401 90.2239 218.45 90.4026C218.5 90.5813 218.514 90.768 218.491 90.9521C218.469 91.1361 218.41 91.3139 218.319 91.4754C218.227 91.6368 218.105 91.7786 217.959 91.8928C217.813 92.007 217.646 92.0913 217.467 92.1409C217.289 92.1905 217.102 92.2044 216.918 92.1818C216.734 92.1592 216.556 92.1006 216.394 92.0093L216.334 91.9811Z"
            fill="#FCBD3D"
          />
          <path
            d="M297.418 158.037C297.476 159.044 297.531 160.07 297.575 161.059V161.086C297.575 161.728 297.83 162.345 298.285 162.8C298.739 163.254 299.356 163.51 299.999 163.51C300.642 163.51 301.258 163.254 301.713 162.8C302.168 162.345 302.423 161.728 302.423 161.086L302.363 158.164L302.25 154.76L297.232 155.081C297.295 156.068 297.355 157.052 297.418 158.037Z"
            fill="#FCBD3D"
          />
          <path
            d="M292.28 169.341C292.668 168.956 293.039 168.573 293.384 168.166C293.728 167.759 294.051 167.332 294.359 166.895C294.667 166.457 294.949 165.998 295.219 165.531C295.489 165.063 295.725 164.571 295.959 164.08C296.412 163.08 296.805 162.054 297.136 161.007C297.303 160.483 297.456 159.953 297.601 159.421C297.672 159.155 297.74 158.887 297.803 158.615L297.895 158.212L297.976 157.833V157.791C298.036 157.492 298.211 157.229 298.463 157.059C298.716 156.889 299.025 156.825 299.325 156.881C299.624 156.938 299.889 157.11 300.062 157.361C300.235 157.611 300.302 157.92 300.249 158.22C300.221 158.395 300.194 158.534 300.166 158.688C300.138 158.841 300.106 158.986 300.072 159.133C300.005 159.427 299.933 159.717 299.858 160.007C299.709 160.59 299.532 161.162 299.338 161.728C298.948 162.868 298.469 163.976 297.905 165.041C297.339 166.124 296.654 167.142 295.864 168.075C295.454 168.54 295.005 168.969 294.522 169.359C294.033 169.745 293.5 170.073 292.934 170.336C292.803 170.408 292.65 170.428 292.505 170.393C292.36 170.359 292.233 170.272 292.148 170.149C292.063 170.026 292.027 169.876 292.046 169.728C292.065 169.58 292.138 169.444 292.251 169.347L292.28 169.341Z"
            fill="#FCBD3D"
          />
          <path
            d="M299.761 161.261C299.703 162.484 299.592 163.691 299.449 164.9C299.306 166.109 299.128 167.318 298.941 168.527C298.56 170.931 298.113 173.331 297.531 175.702C297.5 175.823 297.425 175.928 297.321 175.998C297.218 176.067 297.092 176.095 296.969 176.078C296.845 176.06 296.733 175.997 296.653 175.902C296.573 175.806 296.531 175.684 296.535 175.559L296.872 168.318C296.928 167.109 296.974 165.9 297.047 164.703C297.119 163.506 297.2 162.285 297.315 161.104C297.338 160.779 297.49 160.476 297.737 160.263C297.983 160.049 298.305 159.943 298.63 159.966C298.955 159.99 299.257 160.142 299.471 160.388C299.684 160.635 299.791 160.956 299.767 161.281L299.761 161.261Z"
            fill="#FCBD3D"
          />
          <path
            d="M301.272 161.779C301.272 164.247 301.115 166.711 300.924 169.176C300.732 171.64 300.521 174.105 300.221 176.571C300.207 176.697 300.146 176.813 300.051 176.896C299.956 176.98 299.833 177.025 299.707 177.022C299.58 177.019 299.459 176.969 299.368 176.881C299.276 176.794 299.221 176.675 299.213 176.549C299.03 174.074 298.919 171.6 298.838 169.123C298.758 166.647 298.701 164.173 298.816 161.702C298.834 161.384 298.975 161.085 299.208 160.869C299.442 160.652 299.751 160.535 300.07 160.542C300.388 160.549 300.692 160.679 300.916 160.905C301.14 161.131 301.268 161.436 301.272 161.755V161.779Z"
            fill="#FCBD3D"
          />
          <path
            d="M301.784 162.188C301.867 162.45 301.929 162.679 301.986 162.921C302.042 163.163 302.105 163.399 302.157 163.641C302.26 164.12 302.358 164.602 302.423 165.085C302.576 166.051 302.671 167.024 302.731 167.999C302.792 168.974 302.816 169.948 302.786 170.921C302.769 171.893 302.702 172.865 302.584 173.83C302.571 173.941 302.518 174.044 302.435 174.118C302.351 174.192 302.244 174.233 302.132 174.233C302.02 174.233 301.912 174.192 301.829 174.118C301.745 174.044 301.692 173.941 301.679 173.83C301.575 172.885 301.478 171.95 301.337 171.009C301.196 170.068 301.045 169.154 300.869 168.235C300.694 167.316 300.491 166.403 300.287 165.494L299.975 164.138L299.658 162.814V162.786C299.586 162.506 299.626 162.208 299.77 161.957C299.914 161.706 300.15 161.521 300.429 161.442C300.707 161.363 301.006 161.396 301.26 161.535C301.515 161.673 301.705 161.905 301.79 162.182L301.784 162.188Z"
            fill="#FCBD3D"
          />
          <path
            d="M302.441 160.735C302.614 161.128 302.745 161.489 302.874 161.869C303.003 162.25 303.118 162.623 303.225 163.004C303.443 163.764 303.616 164.533 303.783 165.303C304.111 166.842 304.356 168.397 304.519 169.962C304.528 170.071 304.498 170.18 304.434 170.269C304.369 170.358 304.276 170.421 304.169 170.447C304.062 170.473 303.95 170.459 303.852 170.41C303.755 170.36 303.678 170.277 303.636 170.175C303.348 169.45 303.074 168.722 302.798 167.999L301.978 165.833L301.156 163.685C301.021 163.328 300.888 162.97 300.753 162.613C300.618 162.256 300.493 161.894 300.382 161.563V161.535C300.287 161.264 300.3 160.966 300.42 160.705C300.54 160.444 300.756 160.24 301.024 160.135C301.292 160.03 301.59 160.034 301.855 160.145C302.12 160.256 302.332 160.465 302.445 160.729L302.441 160.735Z"
            fill="#FCBD3D"
          />
          <path
            d="M282.601 88.4408C282.601 88.4408 287.891 84.4108 289.739 80.7193C291.586 77.0278 289.763 75.8833 291.899 71.6034C294.035 67.3236 296.003 68.9174 299.098 62.7374C299.987 60.9622 300.924 55.2537 294.685 52.1325C288.447 49.0113 281.685 51.5078 281.685 51.5078C281.685 51.5078 280.198 48.4854 275.112 45.9404C259.568 38.1645 247.615 62.0604 260.378 68.4399C265.847 71.1762 277.304 65.3972 283.696 68.589C280.792 70.4347 281.223 78.4484 281.223 78.4484"
            stroke="#39327F"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M225.772 108.998L232.019 116.913C232.172 117.124 232.378 117.291 232.616 117.397C232.854 117.503 233.116 117.545 233.375 117.517L243.027 117.197"
            stroke="#65B1F8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>

        <HeadingSmall color={primary} marginTop={scale900}>
          {translations.noRowsTitle}
        </HeadingSmall>
        <ParagraphMedium marginTop={scale900} marginBottom={scale900}>
          {translations.noRowsSubtext}
        </ParagraphMedium>
      </StyledNoRowsTemplateContainer>
    </StyledNoRowsTemplate>
  );
};

export default NoRowsTemplate;
