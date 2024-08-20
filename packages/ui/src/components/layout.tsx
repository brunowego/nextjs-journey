import type { HTMLAttributes } from 'react'

import cn from '../utils/cn'
import { LogoMark } from './logo'

type LayoutProps = HTMLAttributes<HTMLDivElement>

const Layout = ({ className, ...props }: LayoutProps) => {
  return (
    <div className={cn('flex h-screen 2xl:container', className)} {...props} />
  )
}

type LayoutHeaderProps = HTMLAttributes<HTMLElement> & {
  infinite?: boolean
}

const LayoutHeader = ({
  infinite = true,
  className,
  children,
}: LayoutHeaderProps) => {
  return (
    <>
      {infinite ? (
        <div className='-translate-x-full fixed top-0 bottom-0 z-20 w-full bg-secondary' />
      ) : null}

      <header
        className={cn(
          'fixed inset-y-0 z-10 flex w-16 flex-col gap-y-4 px-2 py-3 text-center shadow-md',
          infinite ? 'bg-secondary' : null,
          className,
        )}
      >
        <a className='self-center py-1' href='/'>
          <LogoMark className='size-8' />
        </a>

        <nav className='flex h-full flex-col items-center gap-y-1 *:p-2.5'>
          {children}
        </nav>
      </header>
    </>
  )
}

type LayoutContentProps = HTMLAttributes<HTMLElement>

const LayoutContent = ({ className, ...props }: LayoutContentProps) => {
  return (
    <main className={cn('flex w-full border-r pl-16', className)} {...props} />
  )
}

type LayoutAsideProps = HTMLAttributes<HTMLElement>

const LayoutAside = ({ className, ...props }: LayoutAsideProps) => {
  return (
    <aside
      className={cn('w-96 shrink-0 max-lg:hidden', className)}
      {...props}
    />
  )
}

Layout.Header = LayoutHeader
Layout.Content = LayoutContent
Layout.Aside = LayoutAside

export default Layout
