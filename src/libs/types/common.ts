// T = a flexible object type that allows any string key with any value
// Used for controllers so you can add methods like: controller.goHome = () => {}
export interface T {
    [key: string]: any;
}
