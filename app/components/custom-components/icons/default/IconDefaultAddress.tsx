interface IconDefaultAddressProps {
    width?: string;
    height?: string;
    color?: string;
  }
  
  export function IconDefaultAddress({ color = '#000', width = 'inherit', height }: IconDefaultAddressProps) {
  
      const svg = (
          <svg
              width={width ?? 24}
              height={height ?? 24} 
              viewBox="0 -960 960 960"
              fill={color}
              xmlns="http://www.w3.org/2000/svg"
          >
              <path d="M369.23-446.92h73.85v-102.31h73.84v102.31h73.85v-176.16L480-696.92l-110.77 73.84v176.16ZM480-179.46q117.38-105.08 179.65-201.58 62.27-96.5 62.27-169.04 0-109.38-69.5-179.84-69.5-70.46-172.42-70.46-102.92 0-172.42 70.46-69.5 70.46-69.5 179.84 0 72.54 62.27 169.04 62.27 96.5 179.65 201.58Zm0 79.84Q329-230.46 253.54-343.15q-75.46-112.7-75.46-206.93 0-138.46 89.57-224.19Q357.23-860 480-860t212.35 85.73q89.57 85.73 89.57 224.19 0 94.23-75.46 206.93Q631-230.46 480-99.62Zm0-458.07Z"/>
          </svg>
      )
  
      return (
          <div className="icon">
              {svg}
          </div>
      );
  }
  
  
  
  