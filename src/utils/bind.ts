export default function bind(target: any, key: string) {
  target[key] = target[key].bind(target)
}

export function binds(...args: any[]) {
  return (target: any, key: string) => {
    target[key] = target[key].bind(target, ...args)
  }
}
