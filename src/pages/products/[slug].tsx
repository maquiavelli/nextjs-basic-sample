import { useRouter } from 'next/router'

export default function ProductDetail() {
  const router = useRouter()
  return (
    <div>
      <h2>Detalhe Camiseta {router.query.slug}</h2>
    </div>
  )
}