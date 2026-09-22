export const getSafeReturnPath = ({ value }: { value: string | null }) => {
  if (!value || !value.startsWith('/') || value.startsWith('//')) {
    return '/library'
  }

  return value
}
