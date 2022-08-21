import ContentLoader from "react-content-loader"

export function ProfileLoading(){
  return (
    <ContentLoader 
      speed={2}
      width="100%"
      height='100%'
      backgroundColor="transparent"
      foregroundColor="#1C2F41"
    >
      <rect x="10" y="0" rx="8" ry="8" width="148" height="148" /> 
      <rect x="200" y="30" rx="0" ry="0" width="300" height="32" /> 
      <rect x="200" y="100" rx="0" ry="0" width="100" height="32" /> 
      <rect x="324" y="100" rx="0" ry="0" width="100" height="32" /> 
      <rect x="720" y="30" rx="0" ry="0" width="101" height="32" />
    </ContentLoader>
  )
}

export function HeaderPostLoading(){
  return (
    <ContentLoader 
    speed={2}
    width="100%"
    height='100%'
    backgroundColor="transparent"
    foregroundColor="#1C2F41"
    >
      <rect x="0" y="0" rx="0" ry="0" width="79" height="20" /> 
      <rect x="0" y="40" rx="0" ry="0" width="570" height="32" /> 
      <rect x="0" y="110" rx="0" ry="0" width="111" height="32" /> 
      <rect x="120" y="110" rx="0" ry="0" width="111" height="32" /> 
      <rect x="240" y="110" rx="0" ry="0" width="111" height="32" /> 
      <rect x="709" y="2" rx="0" ry="0" width="160" height="20" />
    </ContentLoader>
  )
}

export function ContentPostLoading(){
  return (
    <ContentLoader 
    speed={2}
    width="100%"
    height='100%'
    backgroundColor="transparent"
    foregroundColor="#1C2F41"
    >
      <rect x="0" y="0" rx="8" ry="8" width="100%" height="15" />
      <rect x="0" y="40" rx="8" ry="8" width="48%" height="15" />
      <rect x="50%" y="40" rx="8" ry="8" width="50%" height="15" />
      <rect x="0" y="60" rx="8" ry="8" width="100%" height="15" />
      <rect x="0" y="80" rx="8" ry="8" width="100%" height="15" />
      <rect x="0" y="100" rx="8" ry="8" width="100%" height="15" />
      <rect x="0" y="120" rx="8" ry="8" width="30%" height="15" />
      <rect x="32%" y="120" rx="8" ry="8" width="68%" height="15" />
    </ContentLoader>
  )
}