/* eslint-disable react/prop-types */
import React, { ReactElement } from 'react'

interface Props {
  children: any
}

export default function Header({
  children,
  ...restprops
}: Props): ReactElement {
  return <div {...restprops}>{children}</div>
}
Header.Wrapper = function HeaderWrapper({
  children,
  ...restprops
}: Props): ReactElement {
  return <div {...restprops}>{children}</div>
}
