const Order = (msg: string) => {
  const message = encodeURI(msg)
  window.location.href = `https://wa.me/6282112083982?text=${message}`
}
// future
export default Order
