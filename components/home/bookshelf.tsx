import { AccountButton } from '@/components/home/account-button'
import { BookshelfNav } from '@/components/home/bookshelf-nav'

export const Bookshelf = () => {
  return (
    <header className="sticky top-0 z-50">
      <div className="relative wall-paper">
        <AccountButton />
        <BookshelfNav />
      </div>
    </header>
  )
}
