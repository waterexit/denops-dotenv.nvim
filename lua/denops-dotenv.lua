local M = {}

M.setup = function()
    vim.api.nvim_create_autocmd("User", {
        pattern = "DenopsPluginPost:dotenv",
        callback = function()
            vim.fn['denops#request']("dotenv", "set", {})
            vim.api.nvim_exec_autocmds('User', { pattern = 'SetEnv' })
        end
    })
end

return M
