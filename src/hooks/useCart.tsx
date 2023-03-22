import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { getCart, addOrUpdateCart, removeFromCart } from '../api/firebase';
import { useAuthContext } from '../context/AuthContext';

export default function useCart() {
  const { uid } = useAuthContext();
  const queryClient = useQueryClient();

  // carts 전체가 아닌 사용자 별로 캐시가 이루어 지도록 설정
  const cartQuery = useQuery(['carts', uid || ''], () => getCart(uid), {
    enabled: !!uid, // uid가 없으면 사용자가 아니므로 쿼리가 실행 되지 않게 한다.
  });

  const addOrUpdateItem = useMutation(
    product => addOrUpdateCart(uid, product),
    {
      onSuccess: () => queryClient.invalidateQueries(['carts', uid]),
      // uid를 가지고 있는(로그인한) 사용자만 캐시
    }
  );

  const removeItem = useMutation(id => removeFromCart(uid, id), {
    onSuccess: () => queryClient.invalidateQueries(['carts', uid]),
  });

  return { cartQuery, addOrUpdateItem, removeItem };
}
