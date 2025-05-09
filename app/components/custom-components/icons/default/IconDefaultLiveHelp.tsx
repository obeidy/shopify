interface IconDefaultLiveHelpProps {
    width?: string;
    height?: string;
    color?: string;
    type?: 'line' | 'fill'
  }
  
export function IconDefaultLiveHelp({ color, width = 'inherit', height, type }: IconDefaultLiveHelpProps) {

    const svg = (
    <>
        { type ? (
            <svg
                width={width ?? 24}
                height={height ?? 24} 
                viewBox="0 -960 960 960"
                fill={color}
                xmlns="http://www.w3.org/2000/svg"
            >
                <path d="M360-160H200q-33 0-56.5-23.5T120-240v-560q0-33 23.5-56.5T200-880h560q33 0 56.5 23.5T840-800v560q0 33-23.5 56.5T760-160H600l-92 92q-12 12-28 12t-28-12l-92-92Zm116-120q21 0 35.5-14.5T526-330q0-21-14.5-35.5T476-380q-21 0-35.5 14.5T426-330q0 21 14.5 35.5T476-280Zm70-360q0 17-11 36.5T498-561q-17 15-27.5 28.5T453-505q-4 8-6 16t-4 18q-2 15 8 26t26 11q14 0 25-10t15-27q3-14 11.5-26t27.5-31q35-35 49.5-59t14.5-53q0-54-36.5-87T484-760q-45 0-78 19t-53 53q-7 12-.5 25t20.5 18q13 5 26 0t21-16q11-14 27-22.5t37-8.5q26 0 44 14.5t18 37.5Z"/>
            </svg>
        ) : (
            <svg 
                width={width ?? 24}
                height={height ?? 24} 
                viewBox="0 -960 960 960"
                fill={color}
                xmlns="http://www.w3.org/2000/svg"
            >
                    <path d="M368.46-180H212.31Q182-180 161-201q-21-21-21-51.31v-535.38Q140-818 161-839q21-21 51.31-21h535.38Q778-860 799-839q21 21 21 51.31v535.38Q820-222 799-201q-21 21-51.31 21H591.54l-86.23 86.23Q494.46-82.93 480-82.93q-14.46 0-25.31-10.84L368.46-180Zm-156.15-60h180.46L480-152.77 567.23-240h180.46q5.39 0 8.85-3.46t3.46-8.85v-535.38q0-5.39-3.46-8.85t-8.85-3.46H212.31q-5.39 0-8.85 3.46t-3.46 8.85v535.38q0 5.39 3.46 8.85t8.85 3.46ZM480-520Zm-2.08 224.23q17.16 0 28.96-11.81 11.81-11.81 11.81-28.96t-11.81-28.96q-11.8-11.81-28.96-11.81-17.15 0-28.96 11.81-11.81 11.81-11.81 28.96t11.81 28.96q11.81 11.81 28.96 11.81Zm72.7-338.08q0 18.16-10.43 37.27-10.42 19.12-34.11 40.2-16.23 14.61-26.73 27.73-10.5 13.11-17.12 26.34-4.38 8.39-6.38 16.58-2 8.19-4 18.19-1.62 11.54 6.07 20.04 7.7 8.5 19.85 8.5 10.92 0 19.42-7.69 8.5-7.69 11.35-20.46 3-14.77 11.5-27.54t27.88-32.16q32.31-32.3 45.85-55.92 13.54-23.61 13.54-51.08 0-49.38-33.62-79.88-33.61-30.5-90.07-30.5-39.23 0-70.31 17.46-31.08 17.46-49.92 48.77-5.47 9.31-.7 19.62 4.77 10.3 15.7 14.15 9.92 3.85 20.23 0 10.3-3.85 16.76-12.54 12.54-16.69 29.5-25.77 16.97-9.08 38.74-9.08 29.46 0 48.23 15.66 18.77 15.65 18.77 42.11Z"/>
            </svg>
        )}
    </>
    )

    return (
        <div className="icon">
            {svg}
        </div>
    );
}
