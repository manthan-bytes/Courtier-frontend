import { IconProps } from "../types";

export const VolumeMute = ({ size, color }: IconProps) => {
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" width={size || "24"} height={size || "24"} viewBox="0 0 24 24" fill="none">
        <g clip-path="url(#clip0_2185_245)">
          <path d="M13.644 0.418011C13.416 0.228011 13.115 0.15001 12.823 0.20301C9.82205 0.758011 7.06905 2.50501 5.26905 4.99701H4.99805C2.24105 4.99801 -0.00195312 7.24101 -0.00195312 9.99801V14.003C-0.00195312 16.76 2.24105 19.003 4.99805 19.003H5.26905C7.07105 21.498 9.82405 23.246 12.823 23.797C12.883 23.808 12.944 23.814 13.004 23.814C13.236 23.814 13.463 23.733 13.644 23.583C13.872 23.393 14.004 23.111 14.004 22.814V1.18701C14.004 0.890011 13.873 0.608011 13.644 0.418011ZM12.004 21.535C9.97405 20.889 8.15305 19.581 6.89105 17.832L6.59205 17.417C6.40405 17.157 6.10305 17.002 5.78105 17.002H4.99905C3.34505 17.002 1.99905 15.656 1.99905 14.002V9.99701C1.99905 8.34301 3.34505 6.99701 4.99905 6.99701H5.78105C6.10205 6.99701 6.40405 6.84301 6.59205 6.58201L6.89105 6.16701C8.15205 4.42001 9.97405 3.11301 12.005 2.46501V21.533L12.004 21.535ZM23.733 14.293C24.124 14.684 24.124 15.316 23.733 15.707C23.538 15.902 23.282 16 23.026 16C22.77 16 22.514 15.902 22.319 15.707L20.026 13.414L17.733 15.707C17.538 15.902 17.282 16 17.026 16C16.77 16 16.514 15.902 16.319 15.707C15.928 15.316 15.928 14.684 16.319 14.293L18.612 12L16.319 9.70701C15.928 9.31601 15.928 8.68401 16.319 8.29301C16.71 7.90201 17.342 7.90201 17.733 8.29301L20.026 10.586L22.319 8.29301C22.71 7.90201 23.342 7.90201 23.733 8.29301C24.124 8.68401 24.124 9.31601 23.733 9.70701L21.44 12L23.733 14.293Z" fill={color || "#141414"} />
        </g>
        <defs>
          <clipPath id="clip0_2185_245">
            <rect width="24" height="24" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </>
  );
};
