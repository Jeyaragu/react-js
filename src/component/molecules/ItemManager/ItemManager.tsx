import { useState } from "react";
// @ts-expect-error CSS imports are handled by the bundler.
import './ItemManager.style.css';
import Button from "../../atoms/Button/Button";
const ItemManager = ({ onCountChange, count }: { onCountChange: (action: string) => void, count: number }) => {

    return (
        <div className="item-manager">
            <Button
                name='subtract'
                onClick={() => onCountChange('subtract')}
                type='button'
                label="-" />
            <span>{count}</span>
            <Button
                name='add'
                onClick={() => onCountChange('add')}
                type='button'
                label="+" />
        </div>
    )
}

export default ItemManager;