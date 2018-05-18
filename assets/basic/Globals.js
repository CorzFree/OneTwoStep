window.Game = {
    GameManager: null,
    BulletManager: null,
    DuckManger: null,
    PlayerManager: null,

    fireInterval: 1500,
    itemInterval: 8000,
    GameSeconds: 60
}

window.GameState = cc.Enum({
    None: 0,
    Pause: 1,
    Play: 2,
    Over: 3,
    End: 4
})

window.BulletType = cc.Enum({
    Normal: -1,
    Special: -1
});

window.PlayerState = cc.Enum({
    Jump: -1,
    Stand: -1,
    Dead: -1
})
