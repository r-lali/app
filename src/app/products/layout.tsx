import React from 'react'

function layout({
   children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
        layout pro
        {children}
    </div>
  )
}

export default layout