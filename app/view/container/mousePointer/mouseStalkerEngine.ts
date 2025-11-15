export class MouseStalkerEngine {
    public stalkerPosition: Position;
    private targetPosition: Position = { x: 0, y: 0 };

    constructor(initStalkerPosition: Position) {
        this.stalkerPosition = initStalkerPosition;
    }

    public UpdateTargetPosition(newPosition: Position) {
        this.targetPosition = newPosition;
    }

    public Stalk() {
        const deltaX = this.targetPosition.x - this.stalkerPosition.x;
        const deltaY = this.targetPosition.y - this.stalkerPosition.y;
        const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

        const speed = this.CalcStalkerSpeed(distance);
        if (distance >= speed) {
            const moveX = (deltaX / distance) * speed;
            const moveY = (deltaY / distance) * speed;
            const newX = this.stalkerPosition.x + moveX;
            const newY = this.stalkerPosition.y + moveY;

            this.stalkerPosition = { x: newX, y: newY };
        } else {
            // 移動量が距離以上の場合は、マウスの位置に直接移動
            this.stalkerPosition = { x: this.targetPosition.x, y: this.targetPosition.y };
        }
    }

    private CalcStalkerSpeed(distance: number): number {
        const maxDistance = 40;
        const minSpeed = 4;
        const maxSpeed = 10;

        if (distance == 0) {
            return 0;
        }

        let x = 0;
        if (distance >= maxDistance) {
            x = maxDistance;
        }
        x = x / maxDistance;

        //easeout 
        let func = (1 - Math.cos(x * 1 * Math.PI));
        let speed = func * maxSpeed;
        if (speed < minSpeed) {
            speed = minSpeed;
        }
        return speed;
    }
}

export interface Position {
    x: number;
    y: number;
}